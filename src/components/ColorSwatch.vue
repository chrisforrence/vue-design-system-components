<template>
  <table class="color-swatch--default">
    <tr v-for="color in colors" :key="color.name">
      <td class="color-swatch--sample" :style="{backgroundColor: color.hex}"
          @click="copyTextToClipboard(color.hex)"></td>
      <td class="color-swatch--name" v-text="color.name"></td>
      <td class="color-swatch--meta-container">
        <div class="color-swatch--meta-inner-container" v-if="color.meta">
          <div class="color-swatch--meta" v-for="(value, key) in color.meta" :key="key"
               @click="copyTextToClipboard(value)">
            <div class="color-swatch--meta-key" v-text="key"></div>
            <div class="color-swatch--meta-value" v-text="value"></div>
          </div>
        </div>
      </td>
    </tr>
  </table>
</template>

<style>
  .color-swatch--default {
    font-family: sans-serif;
  }

  .color-swatch--sample {
    display: block;
    height: 32px;
    padding: 16px 8px;
    width: 64px;
    cursor: copy;
  }

  .color-swatch--name {
    padding: 0 16px;
    width: 256px;
  }
  .color-swatch--meta-container {
    padding: 0 16px;
  }
  .color-swatch--meta-inner-container {
    display: flex;
    font-size: 12px;
  }
  .color-swatch--meta {
    margin: 0 32px;
    display: flex;
    align-items: center;
    cursor: copy;
  }
  .color-swatch--meta-key {
    border: 0px solid #FFFFFF;
    background-color: #CFCFCF;
    color: #111111;
    border-radius: 9999px;
    font-weight: 700;
    padding: 4px 8px;
    text-align: center;
    text-transform: uppercase;
  }
  .color-swatch--meta-value {
    margin-left: 16px;
  }
</style>

<script>
  export default {
    props: ['colors'],
    methods: {
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
