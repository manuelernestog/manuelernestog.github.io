---
title: "5 Pruebas que debes hacer al comprar tu nueva laptop"
description: "Cuando nos disponemos a comprar una nueva computadora personal son muchos los aspectos que tenemos que tener en cuenta ..."
pubDate: "Feb 22 2022"
heroImage: "https://images.ecency.com/DQmcCWfPqFD1CuyRfnhqZFsfsNFwfBZJ8y8rWYTC6D1Et4E/pruebas_a_la_pc_2_.jpg"
---

Cuando nos disponemos a comprar una nueva computadora personal son muchos los aspectos que tenemos que tener en cuenta, marca, prestaciones, uso que le vamos a dar y el estado del equipo. 

Hoy en día es muy importante la revisión del estado de la computadora al momento de comprarla para verificar que el equipo no tenga defectos de fábrica. Si adquirimos el equipo con algún programa de recuperación como Amazon Renewed o Refurbished, los cuales se encargan de poner a punto y como si estuvieran de fábrica equipos que ya han sido utilizados o que fueron devueltos a las tiendas es incluso más relevante y si adquirimos la PC con algún vendedor informal es fundamental, ya que podrían estar vendiéndonos un equipo de uso como nuevo o con algún fallo interno.

Para realizar estas pruebas vamos a emplear la aplicación Aida64 Extreme la cual podemos descargar directamente desde su [sitio web oficial](https://www.aida64.com/).

## Componentes

Esta es la prueba más sencilla que debemos hacer, pero una de las más importantes. Sencillamente, probamos que cada uno de los componentes de la PC funcionen correctamente, con conectar una memoria en cada puerto, encender la cámara web, reproducir algún video, comprobar que los altavoces se escuchen bien y conectar el equipo a la corriente para ver que se cargue es suficiente.

## Bateria

La batería es uno de los componentes de la pc que más sufre con el uso. El nivel de desgaste (Wear Level) debe ser el menor posible, mientras más nivel de desgaste tenga la batería significa que menor será su duración acorde a la capacidad máxima con que fue diseñada. La capacidad máxima cargada (Fully Charged Capacity) casi siempre va de la mano con el nivel de desgaste, pero en ocasiones no se corresponden por lo que también debemos revisarlo. 

![pika_2022_02_22t14_49_03.550z.png](https://images.ecency.com/DQmcapv3jweYqZtZdFTZbg1zxsdvxjg3AhQKrdaA4DLZG7f/pika_2022_02_22t14_49_03.550z.png)

Las baterías normalmente están diseñadas para cargarse y descargarse una cantidad de veces determinada, esto son los ciclos de carga, esto es otro atributo que debemos verificar el cual lamentablemente no aparece listado en Aida, pero podríamos verificar si el equipo tiene alguna aplicación con información del mismo y buscar esta información.

## Disco Duro

El disco duro es otro componente que sufre mucho desgaste con su uso diario. Primeramente, vamos a comprobar que no tenga ningún problema en el SMART, en caso de tenerlo el programa nos avisaría. Este tipo de error es grave y en caso de tenerlo soy de la opinión de que no deberíamos tomarlo. 

![pika_2022_02_22t14_49_09.824z.png](https://images.ecency.com/DQmQjDeW2WJbHNjMD2iN2RJnm51tJBuBQ4VQNjNCssKvt1B/pika_2022_02_22t14_49_09.824z.png)

En el caso de los HDD es prudente revisar la cantidad de veces que se ha encendido el disco (Total Power On Time), estos parámetros no son muy precisos, pero nos permiten hacernos una idea de si el disco duro es nuevo o tiene mucho uso. En los SSD lo importante son la cantidad de escrituras que ha tenido el disco, ya que estos tiene un número finito de escrituras, a mayor cantidad de escrituras peor, aquí podemos fiarnos un poco más del tiempo de vida del disco duro que estima el programa. 

![pika_2022_02_22t15_13_10.385z.png](https://images.ecency.com/DQmUJLaUDWh1pANn9CL9VZJMG9nZow9Qi1ZQ9C7hu56bmxV/pika_2022_02_22t15_13_10.385z.png)

Si queremos ver más datos del disco duro podemos instalar la aplicación [CristalDiskInfo](https://crystalmark.info/en/software/crystaldiskinfo/)  que nos ofrece muchísima información de utilidad y es bastante preciso con estos datos. 

## Temperatura y Rendimiento

La temperatura siempre es un aspecto fundamental a probar en un nuevo equipo, ya que si sobrecalienta esto puede afectar su rendimiento y su vida útil. Todas las pruebas que hagamos de este tipo deben hacerse con el equipo conectado a la corriente. 

![pika_2022_02_22t14_49_15.387z.png](https://images.ecency.com/DQmcQs9XrzNz9HwUVkRRgtGKCvZdJtg84uwictUuFwFDwWG/pika_2022_02_22t14_49_15.387z.png)


Primeramente en la aplicación Aida vamos a ir a Tools / System Stability Test. Aquí vamos a ejecutar esta prueba que estresa la CPU y las Memorias y vamos a dejarla ejecutándose por unos 5 minutos. Mientras lo hacemos podemos ver como sube la carga en el procesador y como se comporta la temperatura. Debemos revisar que tanto sube la temperatura del microprocesador, esto va a variar en dependencia de que procesador tiene el equipo por lo que no hay un valor máximo determinado, normalmente los procesadores pueden llegar a alcanzar los 80 grados en su carga máxima, pero incluso podría ser superior si se trata de un procesador muy potente.

Lo alarmante es el CPU Throttling, lo cual es que el procesador comienza a disminuir su rendimiento por un sobrecalentamiento. Esto puede ocurrir en ocasiones incluso en dispositivos nuevos en una pequeña medida (hasta un 10% me parece razonable) pero personalmente es una cosa que trato de evitar en su totalidad.

![pika_2022_02_22t14_49_21.309z.png](https://images.ecency.com/DQmbFxRyrnUQQUoSGoXbYwquG71vcaw4pRHptYNgNYAC3yZ/pika_2022_02_22t14_49_21.309z.png)

Luego de ejecutada esta prueba de estreses proseguimos ha hacer una prueba de rendimiento, para ello utilizaremos [Cinebench](https://www.maxon.net/en/downloads/cinebench-r23-downloads) donde podemos hacer pruebas de CPU y GPU y nos dará una puntuación la cual podemos comparar con el rendimiento de otros equipos similares. Mientras ejecutamos esta prueba podemos dejar abierto el gráfico de temperatura de Aida (sin correr la prueba de estrés) para ver como se comportan las temperaturas ante una prueba más real.

Si bien estas pruebas no son una garantía de que el equipo nos durará de por vida si nos ayudan a identificar si hay algún problema serio en el equipo al momento de comprarlo para decidir si nos quedamos con él o lo devolvemos. Espero que te hayan sido de utilidad y los pongas en práctica.