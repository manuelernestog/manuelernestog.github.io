---
title: "Como hakearon las llaves privadas de un amigo directamente de Metamask y que hacer para que no te ocurra."
description: "Resulta que hoy en la noche estamos en la comunidad conversando y de momento uno de los miembros..."
pubDate: "Jun 04 2022"
heroImage: "https://images.ecency.com/DQmUytfbt6r8qGgvKhBLQwehcj7aPA23VVuFXQk8PHq95Gw/istock_962366210.png"
---

Resulta que hoy en la noche estamos en la comunidad conversando y de momento uno de los miembros nos dice sin más que le hackearon la billetera Metamask.

![Screenshot from 2022-06-03 23-46-16.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1654316018274/GITJ3tjU6.png)

Insider nos cuenta que estaba descargando un crack para una aplicación de diseño que necesitaba utilizar. La bajo y la empleo a unque según dice algo le daba mala espina. Al cabo del tiempo, sin siquiera haber abierto la billetera ese día le llega una notificación diciéndole había realizado una transferencia, en ese momento callo en la cuenta de que evidentemente ese crack que había bajado estaba comprometido y de alguna manera por ahí le había hackeado la wallet. 

Estuvimos hablando un rato en la comunidad tratando de entender que había pasado, aunque al inicio no entendíamos que podía haber sido, él no tiene físicamente las claves en la PC por lo que descartaba que el virus hubiera registrado los ficherons en busca de las llave. Tampoco había abierto Metamask ese día por lo que tampoco se trataba de un Keylogger (Un virus que captura lo que tecleamos) y si así lo fuera esa contraseña es solo de Metamask le seguían faltando las llaves.

## Investigación de lo ocurrido

Resulta que cuando creamos nuestra cuenta de Metamask en nuestro navegador, este cifra y almacena nuestras llaves privadas de manera local. Esta información se almacena en un fichero físico al cual se puede [acceder desde la pc](https://ethereum.stackexchange.com/questions/52658/where-does-metamask-store-the-wallet-seed-file-path) o desde [local-storage del navegador web](https://github.com/MetaMask/metamask-extension/issues/2749).

![Screenshot from 2022-06-03 23-48-37.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1654317153548/ELap0daBj.png)

![Screenshot from 2022-06-03 23-22-49.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1654317304353/8SzsUI3v8.png)

La información que tiene este registro está cifrada con la contraseña con que inicialmente configuramos Metamask, por lo que con tener ese fichero no es suficiente para robar nuestras llaves, también necesita de esta contraseña.

Al parecer, por cuestiones de seguridad para recuperar las llaves Metamask tiene [una herramienta](https://github.com/MetaMask/vault-decryptor) de código abierto a la que le puedes pasar el bloque de información cifrado y la contraseña y puedes obtener las llaves privadas.

![Screenshot from 2022-06-03 23-51-57.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1654318755522/j74AS9-t4.png)

Al esta herramienta ser de código abierto es muy sencillo descargarla y modificar su código, por lo que fácilmente podríamos hacer un ataque de fuerza bruta o con un diccionario que itere intentando romper la contraseña del fichero y en caso de la contraseña no ser muy fuerte podemos obtener las llaves privadas.

Aquí tiene las páginas de las que bajo el crack y como estas hay muchas otras donde casi siempre los cracks o aplicaciones crackeadas están comprometidas.

![Screenshot from 2022-06-04 01-01-18.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1654318899263/upoScm1ee.png)

Esta es la wallet a la que el atacante envió los tokens que robó de la billetera. Al parecer muchos otros han caído en lo mismo, ya que el valor de la billetera es de 10 mil dólares.

![photo_2022-06-03_22-35-59.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1654318961260/AS-RCXAtH.jpg)

## Veredicto

Toda esta información es la que nos lleva a deducir que el crack que descargó contenía un troyano que accedió a esos ficheros de Metamask y los envió al atacante. La contraseña que tenía en Metamask no era muy fuerte (yo mismo tampoco tengo una muy fuerte, ya que al final a esa extensión solo se puede acceder de forma local) y al atacante tener en sus manos el fichero con un ataque de fuerza bruta, logro descifrar el archivo, acceder a las llaves privadas y con esto a la wallet.


## Consejos

De lo ocurrido podemos sacar varias recomendaciones para que no nos ocurra lo mismo:

- Evitar descargar cracks o aplicaciones crackeadas ya pueden estar comprometidas.
- Tener siempre un antivirus si vamos a navegar por internet y más si te vas a meter en sitios raros.
- Metamask almacena nuestras llaves privadas de manera local y aunque estén cifradas están ahí, por lo que si lo vamos a utilizar tenemos que ponerle una contraseña fuerte para evitar que accedan a nuestras llaves.

## Conclusión

Luego de haber visto este caso me queda un sabor bien amargo respecto a como las wallets manejan nuestras llaves, nunca pensé que Metamask almacenara las llaves en nuestra PC, entiendo que lo hace como mecanismo de recuperación, pero me parece inapropiado sobre todo cuando esto es lo primero que se dice que no se debe hacer. Ahora me surgen las dudas de como funcionara la aplicación Movil y si tiene este mismo problema  o como funcionaran las demás wallets donde almacenamos nuestros tokens. Por mi parte, procuraré poner contraseñas bien fuertes (aunque esto no es infalible porque si combinan el ataque con un keylogger la pueden capturar) y si es posible investigar bien una billetera y sus mecanismos de seguridad antes de emplearla.

