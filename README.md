# Введение
Давайте посмотрим, что такого особенного в JavaScript, чего можно достичь с его помощью.

Программы на этом языке называются скриптами. Они могут встраиваться в HTML и выполняться автоматически при загрузке веб-страницы.

Скрипты распространяются и выполняются, как простой текст. Им не нужна специальная подготовка или компиляция для запуска.

Сегодня JavaScript может выполняться не только в браузере, но и на сервере или на любом другом устройстве, которое имеет специальную программу, называющуюся «движком» JavaScript.


### Как работают движки?

- Движок (встроенный, если это браузер) читает («парсит») текст скрипта.
Затем он преобразует («компилирует») скрипт в машинный язык.
После этого машинный код запускается и работает достаточно быстро.
Движок применяет оптимизации на каждом этапе. Он даже просматривает скомпилированный скрипт во время его работы, анализируя проходящие через него данные, и применяет оптимизации к машинному коду, полагаясь на полученные знания. В результате скрипты работают очень быстро.

### Что может JavaScript в браузере?

- В браузере для JavaScript доступно всё, что связано с манипулированием веб-страницами, взаимодействием с пользователем и веб-сервером.

### Чего НЕ может JavaScript в браузере?
- Ради безопасности пользователя предотвращается доступ недобросовестной веб-страницы к личной информации и нанесение ущерба данным.

Что делает JavaScript особенным?

- Полная интеграция с HTML/CSS.
    Простые вещи делаются просто.
    Поддерживается всеми основными браузерами и включён по умолчанию.

# Types

- Значение в JavaScript всегда относится к данным определённого типа. 
- Есть восемь основных типов данных в JavaScript.

Переменная в JavaScript может содержать любые данные. В один момент там может быть строка, а в другой – число:

    let message = "hello"; // string
    message = 123456; // number

### Числа
- Числовой тип данных (number) представляет как целочисленные значения, так и числа с плавающей точкой.

- Кроме обычных чисел, существуют так называемые «специальные числовые значения», которые относятся к этому типу данных: `Infinity`, `-Infinity` и `NaN`.

- NaN означает вычислительную ошибку. Это результат неправильной или неопределённой математической операции, например:

        const result = "два" * 2;
- Если где-то в математическом выражении есть NaN, то результатом вычислений с его участием будет NaN.
**И это самый страшный результат математической операции (`не фатальная ошибка`, `не исключение`)**

### BigInt 
- В JavaScript тип «number» не может содержать числа больше, чем (253-1) (т. е. 9007199254740991), или меньше, чем -(253-1) для отрицательных чисел. Это техническое ограничение вызвано их внутренним представлением.
- Тип BigInt был добавлен в JavaScript, чтобы дать возможность работать с целыми числами произвольной длины.

- Чтобы создать значение типа BigInt, необходимо добавить n в конец числового литерала:

        const bigInt = 1234567890123456789012345678901234567890n;

### Строка

- Строка (string) в JavaScript должна быть заключена в кавычки:

        const str2 = 'привет';
        const str = "двойные кавычки тоже вариант например когда надо в строке использовать одинарные It's like that";
        const phrase = `Обратные кавычки позволяют встраивать переменные или выражения ${str} ${4084441 / (1011 + 1010)}`;

### Булевый (логический) тип

- Булевый тип (boolean) может принимать только два значения: `true` (истина) и `false` (ложь).
- Результат сравнения - boolean:

        4 > 1; // true
        4 === 4; // true
        '4' === 4; // false


### Значение «null»
- Оно формирует отдельный тип, который содержит только значение null

        const requestResult = null;

### Значение «undefined»

- Специальное значение undefined также стоит особняком. Оно формирует тип из самого себя так же, как и null.

- Оно означает, что «значение не было присвоено».

- Если переменная объявлена, но ей не присвоено никакого значения, то её значением будет undefined:

        let age; // здесь age имеет значение undefined

### Обьект `object`

- Объекты используются для хранения коллекций различных значений и более сложных сущностей. В JavaScript объекты используются очень часто, это одна из основ языка.





### Тип `symbol` (символ)
- используется для создания уникальных идентификаторов в объектах.
- Оператор typeof возвращает тип аргумента. Это полезно, когда мы хотим обрабатывать значения различных типов по-разному или просто хотим сделать проверку.

У него есть две синтаксические формы:

- Синтаксис оператора: typeof x.
- Синтаксис функции: typeof(x).

Вызов typeof x возвращает строку с именем типа:

        typeof undefined // "undefined"

        typeof 0 // "number"

        typeof 10n // "bigint"

        typeof true // "boolean"

        typeof "foo" // "string"

        typeof Symbol("id") // "symbol"

        typeof Math // "object" - встроенный обьект

        typeof null // "object" - ошибка в typeof

        typeof alert 
        /* 
            "function" - Функции относятся к объектному типу. Но typeof обрабатывает их особым образом, возвращая "function". Так тоже повелось от создания JavaScript. Формально это неверно, но может быть удобным на практике.
        */


# Преобразование типов

Чаще всего операторы и функции автоматически приводят переданные им значения к нужному типу.

Математические операторы преобразуют значения к числам.

Есть также случаи, когда нам нужно явно преобразовать значение в ожидаемый тип.

### Преобразование в строку 
- Преобразование происходит очевидным образом. false становится "false", null становится "null" и т.п.

### Преобразование в число
- Численное преобразование
Численное преобразование происходит в математических функциях и выражениях.
Например, когда операция деления / применяется не к числу:

        alert( "4" / "2" ); // 2, строки преобразуются в числа

Из `undefined` получим `NaN`

Из `null` получим `0`

из `true` и `false` получим	`1` и `0` соответственно.


### Логическое преобразование

Происходит в логических операциях, но также может быть выполнено явно.

Правило преобразования:

- Значения, вроде 0, пустой строки, null, undefined и NaN, становятся false.
- Все остальные значения становятся true.

# Promise, callback, async/await

- Порядок выполнения асинхронных операций сложно определить:

        fs.rename('/tmp/hello', '/tmp/world', (err) => {
            console.log('renamed complete');
        });

        fs.stat('/tmp/world', (err, stats) => {
            console.log(`stats: ${JSON.stringify(stats)}`);
        });
- Для этого нужно использовать вложенные колбэки:

        fs.rename('/tmp/hello', '/tmp/world', (err) => { // 1
            fs.stat('/tmp/world', (err, stats) => { // 2 
                console.log(`stats: ${JSON.stringify(stats)}`);
            });
        });
- Что приводит к сложночитаемому коду:

        doSomething((result) => {
            domeSomethingWithResult(result, (resultOfResult) => {
                doSomethingElse(resultOfResult, (hereWeGoAgain) => {
                    // и так далее
                })
            })
        })

### Promise
- Промис это представитель для значение, которое может еще не быть вычислено на момент создания промиса. Промис позволяет назначить обработчики (колбэки) для результа или ошибки асинхронного действия.
Что позволяет асинхронным действиям вернуть значение сразу, но вместо готового значения, возвращается промис который предоставит значение в какой-то момент в будущем.

Промис может быть в одном из трех состояний

- `pending`: начальное значение на момент создания.
- `fulfilled`: успешное вычисление.
- `rejected`: неуспешное вычисление.

        const coinFlip = new Promise((resolve, reject) => {
            const random = Math.random();
            if (random === 0) {
                reject('Fail');
            } else if (random > 0.5 ) {
                resolve(true); 
            } else {
                resolve(false);
            }
        });
- Исполнитель должен вызвать что-то одно: resolve или reject. Состояние промиса может быть изменено только один раз.
Все последующие вызовы resolve и reject будут проигнорированы

#### Как использовать промисы:
- метод `then`

        coinFlip.then(
                (result) => console.log(result ? "Больше" ? "Меньше"),
                (error) => console.log('На ребро?!'),
            )

- метод `catch`

Если мы хотели бы только обработать ошибку, то можно использовать null в качестве первого аргумента: .then(null, errorHandlingFunction). Или можно воспользоваться методом .catch(errorHandlingFunction), который сделает тоже самое    

- метод `finally`

Вызов .finally(f) похож на .then(f, f), в том смысле, что f выполнится в любом случае, когда промис завершится: успешно или с ошибкой. Но в методе `finally` нам недоступен результат

finally хорошо подходит для очистки, например остановки индикатора загрузки, его ведь нужно остановить вне зависимости от результата.

### async/await

#### async

- Специальный синтаксис для работы с промисами. Достаточно прост в использовании.
- Ключевое слово `async` ставится перед функцией:

      async function f() {
        return 42;
      }

      const g = async () => 42;

- У слова `async` один простой смысл: эта функция всегда возвращает промис. Значения других типов оборачиваются в завершившийся успешно промис автоматически.
- Можно и явно вернуть промис:

      const f = async () => 42;
      const g = async () => Promise.resolve(42);

#### await

- Работает только внутри `async` функции
- Ключевое слово await заставит интерпретатор JavaScript ждать до тех пор, пока промис справа от await не выполнится. После чего оно вернёт его результат, и выполнение кода продолжится.

      const promise = myAsyncFunction();
      const result = await promise;
      // Или 
      const res = await myAsyncFunction();

- Обратите внимание, хотя await и заставляет JavaScript дожидаться выполнения промиса, это не отнимает ресурсов процессора. Пока промис не выполнится, JS-движок может заниматься другими задачами: выполнять прочие скрипты, обрабатывать события и т.п.

- Сложночитаемый код можно переписать на более понятный:

      doSomething((result) => {
        domeSomethingWithResult(result, (resultOfResult) => {
            doSomethingElse(resultOfResult, (hereWeGoAgain) => {
                  // и так далее
              });
          });
      });

      const result = await doSomething();
      const resultOfResult = await doSomethingWithResult(result);
      const hereWeGoAgain = await doSomethingElse(resultOfResult);
      ...

#### Обработка ошибок
Когда промис завершается успешно, await promise возвращает результат. Когда завершается с ошибкой – будет выброшено исключение. Как если бы на этом месте находилось выражение throw.

    async function f() {
      await Promise.reject(new Error("Oops!"));
    }
    // Делает то же самое:
    async function f() {
      throw new Error("Oops!");
    }

    // Такие ошибки можно ловить, используя try..catch, как с обычным throw:
    async function f() {

      try {
        let response = await fetch('http://no-such-url');
      } catch(err) {
        alert(err); // TypeError: failed to fetch
      }
    }

    f();
