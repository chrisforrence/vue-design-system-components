<template>
  <div>
      <!-- Only show this if we want to see a summary of WCAG-AAA compliant combinations -->
      <div v-if="summary">
        <h2 style="font-size: 1.25rem;font-weight: 700">&check; WCAG-AAA Compliant</h2>
        <p>The following color combinations are WCAG-AAA Compliant (contrast ratio >= 7:1)</p>
        <div style="display: flex; align-items: center; justify-content: flex-start; margin-bottom: 2rem; flex-wrap: wrap; ">
          <div v-for="combination in colorsRatio(7)"
               :key="combination.background.hex + '-' + combination.foreground.hex"
               style="display: flex; align-items: center; justify-content: center; margin: 2px; width: 3rem; height: 3rem;"
               :style="{backgroundColor: combination.background.hex, color: combination.foreground.hex}"
               class="cursor-copy"
               @click="copyTextToClipboard('background-color: ' + combination.background.hex + '; color: ' + combination.foreground.hex + ';')"
          >
            <span>A a</span>
          </div>
        </div>
        <h2 style="font-size: 1.25rem;font-weight: 700">WCAG-AA Normal / WCAG-AAA Large Compliant</h2>
        <p>The following combinations are WCAG-AAA Compliant (contrast ratio >= 4.5:1)</p>
        <div style="display: flex; align-items: center; justify-content: flex-start; margin-bottom: 2rem; flex-wrap: wrap;">
          <div v-for="combination in colorsRatio(4.5)"
               :key="combination.background.hex + '-' + combination.foreground.hex"
               style="display: flex; align-items: center; justify-content: center; margin: 2px; width: 3rem; height: 3rem;"
               :style="{backgroundColor: combination.background.hex, color: combination.foreground.hex}"
               class="cursor-copy"
               @click="copyTextToClipboard('background-color: ' + combination.background.hex + '; color: ' + combination.foreground.hex + ';')"
          >
            <span>A a</span>
          </div>
        </div>
        <h2 style="font-size: 1.25rem;font-weight: 700">WCAG-AA Large Compliant</h2>
        <p>The following combinations are WCAG-AA Compliant (contrast ratio >= 3:1)</p>
        <div style="display: flex; align-items: center; justify-content: flex-start; margin-bottom: 2rem; flex-wrap: wrap;">
          <div v-for="combination in colorsRatio(3)"
               :key="combination.background.hex + '-' + combination.foreground.hex"
               style="display: flex; align-items: center; justify-content: center; margin: 2px; width: 3rem; height: 3rem;"
               :style="{backgroundColor: combination.background.hex, color: combination.foreground.hex}"
               class="cursor-copy"
               @click="copyTextToClipboard('background-color: ' + combination.background.hex + '; color: ' + combination.foreground.hex + ';')"
          >
            <span>A a</span>
          </div>
        </div>
      </div>
      <!-- Only show this if we want to show the full matrix -->
      <ul v-if="table">
        <li v-for="background in colors"
            style="text-align: left;"
            :key="background.hex">
          <h3 v-text="background.name"></h3>
          <ul>
            <li v-for="foreground in colors"
                v-if="foreground.hex !== background.hex"
                style="display: flex; align-items: center; justify-content: flex-start; text-align: right;"
                :key="foreground.hex"
                :title="getWCAGMessage(calculateContrast(background.hex, foreground.hex))"
            >
              <div style="display: flex; align-items: center; justify-content: center; width: 3rem; height: 3rem;margin-right:1rem;"
                   class="cursor-copy"
                   @click="copyTextToClipboard('background-color: ' + background.hex + '; color: ' + foreground.hex + ';')"
                   :style="{backgroundColor: background.hex, color: foreground.hex}">
                <span>A a</span>
              </div>
              <div :class="getWCAGClass(calculateContrast(background.hex, foreground.hex))">
                Contrast Ratio: <strong>{{ calculateContrast(background.hex, foreground.hex).toFixed(2) }}:1</strong>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
</template>

<style>
.cursor-copy {
  cursor: copy;
}
.wcag--fail {
  color: #999999;
}
.wcag--success {
  color: #111111;
}
.wcag--success::after {
  content: '✅';
  padding-right: 4px;
}
</style>

<script>
  export default {
    props: {
      colors: {
        type: Array,
        required: true
      },
      summary: {
        type: Boolean,
        default: true
      },
      table: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      colorsRatio (minimumContrast) {
        let response = [], contrast
        for (let bg_idx = 0, c = this.colors.length; bg_idx < c; bg_idx++) {
          for (let fg_idx = 0, d = this.colors.length; fg_idx < d; fg_idx++) {
            contrast = this.calculateContrast(this.colors[bg_idx].hex, this.colors[fg_idx].hex)
            if (contrast >= minimumContrast) {
              response.push({foreground: this.colors[fg_idx], background: this.colors[bg_idx], contrast: contrast})
            }
          }
        }
        return response
      },
      getWCAGClass (contrast) {
        if (contrast >= 7) {
          return 'wcag--success'
        }
        if (contrast >= 4.5) {
          return 'wcag--warning'
        }
        if (contrast >= 3) {
          return 'wcag--warning'
        }
        return 'wcag--fail'
      },
      getWCAGMessage (contrast) {
        if (contrast >= 7) {
          return 'WCAG-AAA Normal'
        }
        if (contrast >= 4.5) {
          return 'WCAG AAA Large / WCAG AA Normal'
        }
        if (contrast >= 3) {
          return 'WCAG AA Large'
        }
        return 'Not Compliant'
      },
      getRGBFromHex (hex) {
        let result = /^#?([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/i.exec(hex)
        return result ? {
          red: parseInt(result[1], 16),
          green: parseInt(result[2], 16),
          blue: parseInt(result[3], 16)
        } : null
      },
      getLuminosity (r, g, b) {
        let a = [r, g, b].map(function (v) {
          v /= 255
          return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
        })
        return (a[0] * 0.2126) + (a[1] * 0.7152) + (a[2] * 0.0722);
      },
      calculateContrast (foreground_hex, background_hex) {
        let foreground = this.getRGBFromHex(foreground_hex)
        let background = this.getRGBFromHex(background_hex)

        if (foreground === null || background === null) {
          return 0
        }
        let fgL = this.getLuminosity(foreground.red, foreground.green, foreground.blue) + 0.05
        let bgL = this.getLuminosity(background.red, background.green, background.blue) + 0.05

        return Math.max(fgL, bgL) / Math.min(fgL, bgL)
      },
      isWCAGNormalAA (color1, color2) {
        return this.calculateContrast(color1, color2) >= 4.5
      },
      isWCAGNormalAAA (color1, color2) {
        return this.calculateContrast(color1, color2) >= 7
      },
      isWCAGLargeAA (color1, color2) {
        return this.calculateContrast(color1, color2) >= 3
      },
      isWCAGLargeAAA (color1, color2) {
        return this.calculateContrast(color1, color2) >= 4.5
      },

      copyTextToClipboard(text) {
        if (!navigator.clipboard) {
          this.fallbackCopyTextToClipboard(text)
          return
        }
        navigator.clipboard.writeText(text)
      },
      fallbackCopyTextToClipboard(text) {
        let textarea = document.createElement('textarea')
        textarea.value = text
        document.body.appendChild(textarea)
        textarea.focus()
        textarea.select()

        document.execCommand('copy')

        document.body.removeChild(textarea)
      }
    }
  }
</script>
