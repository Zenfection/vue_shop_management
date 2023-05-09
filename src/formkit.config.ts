import "@formkit/themes/genesis"
import { close, down, fileDoc, check, circle } from "@formkit/icons"
import { DefaultConfigOptions } from '@formkit/vue'
import { createFloatingLabelsPlugin } from '@formkit/addons'
import '@formkit/addons/css/floatingLabels'

const config: DefaultConfigOptions = {
  icons: { close, down, fileDoc, check, circle, checkboxDecorator: check },
  plugins: [
    createFloatingLabelsPlugin({
      useAsDefault: true,
    }),
  ],
}

export default config


// import "@formkit/themes/genesis"
// import { createAutoAnimatePlugin, createFloatingLabelsPlugin } from '@formkit/addons'
// import { close, down, fileDoc, check, circle } from "@formkit/icons"
// import '@formkit/addons/css/floatingLabels'

// const config = {
//   icons: { close, down, fileDoc, check, circle, checkboxDecorator: check },
//   plugins: [
//     createAutoAnimatePlugin({
//       animate: "fade",
//       duration: 500,
//     }),
//     createFloatingLabelsPlugin({  
//       useAsDefault: true,
//     }),
//   ]
// }


// export default config
