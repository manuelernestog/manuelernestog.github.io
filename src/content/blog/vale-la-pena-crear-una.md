---
title: "¿Vale la pena crear una aplicación con no-code?"
description: "El fin de semana pasado se me ocurrió una idea para una solución y como era una cosa sencilla me pareció ..."
pubDate: "May 14 2022"
heroImage: "https://images.ecency.com/DQmeCDJRLpMG5B9vbFbgxznYdNiZ7t6k5KgodoX2Xd1nVLN/thumb_720_450_dreamstime_l_96927265_1_.png"
---

El fin de semana pasado se me ocurrió una idea para una solución y como era una cosa sencilla me pareció una buena oportunidad para lanzar el MVP utilizando herramientas no-code. Debo decir que hasta ahora el stack que seleccione ha sido suficiente para hacer lo que necesito y se ajusta bastante bien a lo que quería ganar con esto: rapidez en la ejecución y minimizar al máximo el costo inicial para validar la idea (solo tuve que pagar el nombre de dominio e incluso pude haber prescindido de ello y hacerlo completamente gratis).

El mayor obstáculo que he tenido hasta ahora ha sido la conexión a internet 😒. Cómo todo se hace en línea y el internet está a una flamante velocidad de 32kbs la app se demora muchísimo cada vez que hago un cambio y en ocasiones se termina colgando y tengo que hacer las cosas de nuevo. Sin exagerar, creo que gracias a esto el desarrollo ha tomado por lo menos el doble del tiempo que me pudo haber tomado con una conexión más menos normal. También es bueno tener en cuenta que ha gastado bastante ancho de banda, ya que todo se hace en línea.

## Lo bueno del no-code:
- Plantillas pre elaboradas con lógica ya implementada.
- No necesitas saber programar para crear un producto.
- No hay que hacer deploy.
- El proceso es bastante rápido
- Con las soluciones que seleccione la inversión inicial es casi nula (solo el nombre de dominio)

## Lo malo:
- Limitantes si quieres hacer algo muy específico
- Límites para la escalabilidad
- Mayores precios a medida que la solución escala que soluciones desarrolladas por uno mismo


## ¿Recomendaría utilizar herramientas no-code? 

Depende. Si no sabes programar y no te interesa hacerlo y tienes una idea de negocio, lo recomiendo 100%, realmente se pueden hacer excelentes aplicaciones con estas herramientas. Ahora si eres programador tendría en cuenta primeramente que es lo que quieres hacer y que dominio tienes de la base que necesitas para ejecutarlo. Si dominas la tecnología y sabes que no te tomara mucho tiempo hacer el MVP pues lo haría programando, pero en caso de tener que estudiar mucho para ejecutar la idea o tener que adquirir mucha infraestructura básica y no contar con los recursos, entonces recomendaría hacerlo con no-code. 

A mi juicio lo fundamental es no dedicar mucho tiempo en el desarrollo y poder testear el mercado y para esto el no-code es una muy buena alternativa, incluso si para escalar hay que implementar la app desde el inicio ya tienes los usuarios en la mano y la idea validada.

### Stack empleado


![Screenshot from 2022-05-13 13-19-40.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1652462395498/yLwPn1zvX.png )

[Softr](https://www.softr.io)

Es un web builder bastante sencillo, lo más interesante que le veo es plan inicial que permite asociar un dominio personalizado libre de costo. Deja personalizar unas cuantas cosas, aunque si quieres algo más avanzado te recomiendo ver Bubble.


![Screenshot from 2022-05-13 13-42-18.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1652463750329/Z_RGP1ZgW.png)

[Airtable](https://airtable.com/invite/r/XmEWMeEK/)

Esta es la base de datos de la aplicación que se integra con softr por detrás, tiene internamente muchas formas de visualizar la información y es supersencilla de utilizar.


![Screenshot from 2022-05-13 13-43-10.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1652463808312/tNFZa6LeS.png)

[Revue](https://www.getrevue.co/)

Con getrevue puedes generar un newsletter totalmente gratis. Tiene integración directa con Twitter y también te permite poner un dominio personalizado (aunque aquí he pasado trabajo para esto todavía me está dando errores el dominio). Para integrarlo con la app se puede emplear una app de terceros.


![Screenshot from 2022-05-13 13-44-04.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1652463858334/-1caxsaN1.png)

[Make](https://www.make.com/)

Antes conocido como Integromat es tremenda herramienta que te permite integrar servicios, en este caso lo voy a usar para capturar la información desde Sorft y mandarla a Airtable para conectarlo con el newsletter, pero se puede hacer muchísimo más con ella. También puedes ver Zappier o Ifttt.


![Screenshot from 2022-05-13 13-45-25.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1652464186872/J8KVRMdrv.png)

[Qvapay](https://qvapay.com/)

Para el procesamiento de pagos con Crypto Qvapay. Ni siquiera hay que utilizar la API, si los pagos no son tan frecuentes se puede hacer semi-automatizados por medio del formulario de pago y el memo donde el usuario introduce su correo como medio para identificarlo. 


![Screenshot from 2022-05-13 13-46-41.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1652464039634/U6E5oU82k.png)

[telepay](https://telepay.cash/ )

Telepay para procesar pagos con Toncoin empleando la misma estrategia del memo.


![Screenshot from 2022-05-13 18-17-12.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1652480252035/mtswx0ZBi.png)

[Tropipay](tropipay.com)

Con esta puedes hacerte una wallet virtual con euros y generar links de pagos para tarjetas Visa / Mastercard 

Espero que lo hayas encontrado útil y te embulles a darle una oportunidad a las herramientas no-code. Happy no-coding :)