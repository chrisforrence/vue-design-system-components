<template>
    <div>
        <ul>
            <li v-for="element in icons"
                :key="element.properties.name"
                style="display: flex; align-items: center; justify-content: flex-start"
                @click="copyTextToClipboard(element.properties.name)"
            >
                <svg :viewBox="'0 0 ' + glyphWidth + ' ' + glyphHeight" width="24" height="24">
                    <path v-for="path in element.icon.paths" :key="path" :d="path"></path>
                </svg>
                <span style="margin-left: 1rem;"
                      v-text="element.properties.name"></span>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        props: {
            icons: {
                type: Array,
                required: true
            },
            glyphHeight: {
                type: Number,
                required: true
            },
            glyphWidth: {
                type: Number,
                required: true
            }
        },
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
<style></style>
