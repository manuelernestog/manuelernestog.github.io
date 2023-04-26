---
title: "Como generar imágenes con IA online o utilizando tu propia IA gratis"
description: "La generación de imágenes utilizando IA se ha vuelto tendencia en estos días con la enorme cantidad..."
pubDate: "Aug 31 2022"
heroImage: "https://images.ecency.com/DQmapbMoEpUxHBVssuDiRxYG6SdLP5ReDHhEQjWRt6Tvc6q/splash.jpg"
---

La generación de imágenes utilizando IA se ha vuelto tendencia en estos días con la enorme cantidad de soluciones que se están creando al respecto. Aquí te resumo los principales servicios que puedes utilizar y como puedes montar tu propia IA totalmente gratis.

Ahora mismo podemos tener acceso a unos cuantas herramientas para generar imágenes con IA, pero cada una tiene sus características, luces y sombras.

## Dall E 2

- Muy fácil de utilizar. 
- Excelente para imágenes foto realistas y artísticas. 
- Para acceder tenemos que solicitar acceso a una lista de espera (en mi caso demoró un mes). 
- Ofrece créditos gratis para comenzar a probarla.

🔗 [https://openai.com/dall-e-2/](https://openai.com/dall-e-2/)

![](https://pbs.twimg.com/media/Fbgp1fdXgAICyos.jpg)

## DALLE mini Pics ahora Craiyon

- Es gratuita 
- Genera objetos bastante bien, pero los resultados con personas no son buenos. 
- Los resultados por ahora no son de alta calidad. 
- Es una buena opción para probar entradas 

[https://www.craiyon.com/](https://www.craiyon.com/)

![](https://pbs.twimg.com/media/Fbgp3ycWIAA0kg3.jpg)

## Midjourney

- Entrenada para crear obras de arte.
- La calidad de los resultados es increíble. 
- Por ahora está en beta y para acceder hay que entrar atreves de Discord
- Te permite crear algunas imágenes gratis para probarla

[https://www.midjourney.com/home/](https://www.midjourney.com/home/)

![](https://pbs.twimg.com/media/Fbgp5g4XgAYVKET.jpg)

## Photosonic

- Es gratuita 
- Genera resultados bastante buenos en dibujos y objetos.
- Los resultados con personas y las caras no son buenos.
- Las imágenes tiene una pequeña marca de agua

[https://photosonic.ai/](https://photosonic.ai/)

![](https://pbs.twimg.com/media/Fbgp9gCXwAEPYCv.jpg)

## DreamStudio

- Excelentes resultados
- Permite utilizar nombres de personas famosas
- Interfaz configurable
- Ofrece bastantes créditos gratis para comenzar a probar la herramienta
- IA #OpenSource

https://beta.dreamstudio.ai/dream

![](https://pbs.twimg.com/media/Fbgp_NoXkAIns5a.jpg)

Y hasta aquí las herramientas online que hasta ahora conozco donde podemos generar imágenes con IA. Creo que los resultados son sorprendentes y su precio es bastante justo, aunque quizás no todos lo puedan costear y para esto también tenemos una alternativa. Para nuestra suerte la IA que utiliza DreamStudio (Stable Diffusion) es Open Source por lo que podemos acceder a su código y utilizarla nosotros también totalmente gratis.

## Montando nuestra propia IA con Stable Difussion

Para instalar nuestra propia IA solamente tenemos que ir al codigo fuente en su repositorio en GitHub, seguir las instrucciones para su instalación y utilizarla.

[https://github.com/CompVis/stable-diffusion](https://github.com/CompVis/stable-diffusion)

Eso si, para correrla local necesitamos al menos una tarjeta gráfica con 10GB de VRAM cosa que la mayoria de los usuarios no tenemos por lo que podemos optar por montarlo en la nube de Google (gratis) y correrlo desde ahí. Para esto vamos a utilizar Colab para la ejecución y esta plantilla que ya incluye los pasos para el montaje

https://colab.research.google.com/github/altryne/sd-webui-colab/blob/main/Stable_Diffusion_WebUi_Altryne.ipynb

Sin más abrimos la plantilla y comenzamos a correr los pasos que tiene uno a uno. Este proceso demora un poco, ya que tiene que descargar e instalar unos cuantos paquetes para su funcionamiento.

![](https://pbs.twimg.com/media/FbgqE5dXkAUat8l.jpg)

En el paso 1.3 tenemos que almacenar, autorizar el acceso a nuestra cuenta de drive de Google porque ahí vamos a almacenar el modelo entrenado por la IA para utilizarlo y las imágenes que genera. Este paso es crítico pero sencillo.

1. Tenemos que crearnos una cuenta en https://huggingface.co que es de donde vamos a obtener el modelo entrenado de #StableDifussion

2. Luego accedemos a https://huggingface.co/CompVis/stable-diffusion-v-1-4-original y descargamos el fichero .cpkt y lo subimos al drive.

Si no quieres descargarlo y luego subirlo puedes copiarlo directamente desde internet al drive utilizando https://offcloud.com conectándolo a tu nube y subiendo [este link](https://googleapis.com/download/storage/v1/b/aai-blog-files/o/sd-v1-4.ckpt?generation=1661197683067230&alt=media) directamente. 

 Ya con el fichero en el drive en la carpeta /AI/models/ terminamos de ejecutar las celdas que faltan y esto generará un enlace público con el que podemos acceder a nuestro front-end para utilizar la IA.

![](https://pbs.twimg.com/media/FbgqHMZXwAYTFGi.jpg)

Y esto es todo, ya tienes tu propia IA lista para generar imágenes totalmente gratis.

Como un plus te recomiendo la web [https://lexica.art](https://lexica.art/) donde puedes encontrar muchísimos ejemplos de entradas y los resultados obtenidos para que mejores las peticiones que le haces a la IA.

![](https://pbs.twimg.com/media/FbgqI7LWYAg2eco.jpg)

Espero que te haya gustado y me quedo al pendiente de ver tus creaciones.