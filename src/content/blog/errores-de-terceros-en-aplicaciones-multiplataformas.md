---
title: "Errores de terceros en aplicaciones multiplataformas"
description: "Estoy trabajando en una app multiplataforma hecha con Electron y llevo exactamente una semana fajado..."
pubDate: "Apr 07 2022"
heroImage: "https://files.peakd.com/file/peakd-hive/manuelernestogr/23tGXuXmGSqXQhUHaKYZRMpFykRfRSVsmD4XXFJFZKXtWsKsvgEnoAeExrGAxRLDDqUTu.png"
---

Estoy trabajando en una app multiplataforma hecha con [Electron](https://www.electronjs.org/) y llevo exactamente una semana fajado con un error superraro que me afectaban cuando compilaba en Windows. Aquí dejo mi experiencia para los #devs por si les puede servir.

Estoy muy a favor de utilizar soluciones como [Electron](https://www.electronjs.org/) y [Capacitor](https://capacitorjs.com/) que permiten hacer soluciones multiplataformas, realmente hacen el proceso mucho más rápido que tener que construir una solución nativa para cada plataforma. 

Como todo, nada es perfecto y aunque utilizar estas soluciones es muy cómodo, necesitas de determinadas dependencias nativas de los sistemas operativos para hacer el Build de la app, por lo que para compilar para macOS necesitas el sistema y así mismo ocurre con los otros. Aparte la API tiene determinadas restricciones, según el OS y tienes que hacer unas cuantas diferenciaciones para cada uno. En mi caso trabajo en #Linux y para compilar las soluciones para las diferentes OS utilizo [travisci](https://app.travis-ci.com/) que tiene ISOs de Mac, Linux y Windows, aunque para este mismo lo hago desde Linux con Docker. Puedes ver [appveyor](https://www.appveyor.com) también.

![Screenshot from 2022-04-07 10-39-18.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1649346126344/SDlSoIYQT.png)

En fin, comencé a adicionarle a la aplicación algunas funciones nativas, para esto utilicé directamente algunas de las características que ofrece Electron y para otras plug-ins de terceros. 

Todo bien en mi entorno, funcionaba sin problemas. Subí el código y se compiló para todos los sistemas operativos sin problema. Luego descargue el build de Windows para probarlo antes de lanzarlo y ahí empezaron los problemas. La app funcionaba, pero no del todo, tenía unas cuantas funciones nativas afectadas. Como esto era un build no podía ver que error se estaba generando, así que me monte una máquina virtual de Windows para ejecutar la aplicación. 

Ahí el problema cambio y cuando terminaba de instalar todos los paquetes y levantaba el servidor no tenía el mismo comportamiento del build, sencillamente no llegaba a cargar la app, mostraba otro error. 
Por otro lado, ni siquiera la versión web de la app se levantaba bien y me mostraba otro error en un componente que siempre funciono, que no se había modificado. En ese punto comencé a hacer todo tipo de pruebas intentando solucionar las cosas

- Upgradiar los paquetes
-  Cambiar el gestor de paquetes
-  Probar con versiones específicas de algunos paquetes
-  Subirme a la placa para coger mejor cobertura (Los datos están fatales)

Luego de unas cuantas pruebas y 20 `yarn install` a 80kb/s en 4g+ estaba en el mismo punto 😩. Lo que más me desconcertaba era que funcionaba en Linux y que la compilación en Travis para Windows también, pero local estaba muerto el Sever. Ya en ese punto no me quedo más que revertir todos los cambios (que era el trabajo de un mes y medio) y ver que lo estaba ocasionando. 

**El problema:** Un plug-in de terceros

De alguna forma esto funcionaba bien en Linux, pero en Windows generaba algún problema interno que por algún motivo se reflejaba incluso en otros paquetes. 

¿Qué aprender de esto?

- Intentar utilizar las soluciones nativas del framework que utilicemos y solo recurrir a paquetes de terceros si es imprescindible 
- Cuando se van a tocar muchas funciones nativas en las #PWA los resultados pueden variar mucho según la plataforma, así que lo más recomendado es utilizarlas en apps que manejen casi todo en el webview. 
- Un paquete que tenga un problema puede mostrarse como un error incluso en otro paquete (Asumo que por alguna dependencia) 
- En apps multiplataformas, si un release va a incluir varios features es recomendable generar un build de prueba cada vez que introducimos un paquete nuevo o se adiciona un feature nativo. 
- Trabajar en un mismo bug y con la internet muy mala por varios días puede acompañarse de cambios de humor y deseos de cambiar de profesión. 😅😅

