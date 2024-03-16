import { camelCase } from "lodash";
import require from "require";

const requireModule = require.context(
	'.',
	true,
	// Исключаем файл index.js, равно как и файлы, в именах которых 
	// есть строки 'actions', 'mutations', или 'getters' .
	// Кроме того, включаем только файлы с расширением .js
	/^(?!.*(actions|mutations|getters|index)).*\.js$/
);

const modules = {};

requireModule.keys().forEach(fileName => {
	// Игнорируем файлы модульных тестов
	if (/\.unit\.js$/.test(fileName)) return;
	// Избавляемся от расширений файлов для преобразования их имён к верблюжьему стилю
	modules[camelCase(fileName.split('/')[1].replace(/(\.\/|\.js)/g, ''))] = {
	  namespaced: true,
	  ...requireModule(fileName).default
	};
});

export default modules;