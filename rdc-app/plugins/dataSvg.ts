// @ts-ignore
import fs from "fs";

export default function myPlugin() {

  const virtualModuleId = 'virtual:svg-loader';
  const resolvedVirtualModuleId = '\0' + virtualModuleId;
  
  const folderName = './src/assets/regions';
  let svgsData = {};

  fs.readdirSync(folderName).forEach(file => {
    let [name, format] = file.split(".");
    if (format !== "svg") {
      console.log("The file format does not match svg");
      return;
    }
    const data = fs.readFileSync(`${folderName}/${file}`, 'utf8');
    svgsData[name] = data;
  });

  return {
    name: 'svg-bundler',
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        return `export const svgLoad =` + JSON.stringify(svgsData);
      }
    },
  }
}