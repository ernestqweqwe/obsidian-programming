HTTP-заголовки — это метаданные, передаваемые в запросах и ответах HTTP-протокола. Они предоставляют дополнительную информацию о запросе или ответе, такую как тип данных, аутентификация, кэширование, управление соединением и другие аспекты.
## Категории заголовков

1. **Общие заголовки** (General Headers): Применяются как к запросам, так и к ответам, описывают общие аспекты соединения.
2. **Заголовки запроса** (Request Headers): Используются клиентом для передачи информации о запросе.
3. **Заголовки ответа** (Response Headers): Используются сервером для предоставления информации об ответе.
4. **Заголовки сущности** (Entity Headers): Описывают содержимое тела сообщения (например, тип данных или их размер).

---

## Ключевые HTTP-заголовки и их назначение

### 1. Общие заголовки (General Headers)

Эти заголовки могут использоваться как в запросах, так и в ответах.

|Заголовок|Описание|Пример|
|---|---|---|
|**Cache-Control**|Управляет кэшированием запросов и ответов. Определяет, как и на какое время кэшировать ресурс.|Cache-Control: max-age=3600, public (кэшировать на 1 час)|
|**Connection**|Управляет поведением соединения. Например, указывает, должно ли соединение оставаться открытым (keep-alive) или закрываться (close).|Connection: keep-alive|
|**Date**|Указывает дату и время отправки запроса или ответа.|Date: Sat, 31 May 2025 11:02:00 GMT|
|**Pragma**|Устаревший заголовок для управления кэшированием (в основном для HTTP/1.0).|Pragma: no-cache|
|**Upgrade**|Позволяет запросить изменение протокола (например, с HTTP/1.1 на WebSocket).|Upgrade: websocket|
|**Via**|Указывает промежуточные прокси или шлюзы, через которые прошел запрос или ответ.|Via: 1.1 proxy.example.com|

### 2. Заголовки запроса (Request Headers)

Используются клиентом (браузером, приложением) для передачи информации о запросе.

|Заголовок|Описание|Пример|
|---|---|---|
|**Accept**|Указывает типы контента (MIME), которые клиент может обработать.|Accept: text/html, application/json|
|**Accept-Encoding**|Указывает, какие методы сжатия поддерживает клиент.|Accept-Encoding: gzip, deflate, br|
|**Accept-Language**|Указывает предпочтительные языки для ответа.|Accept-Language: en-US, ru;q=0.9|
|**Authorization**|Содержит учетные данные для аутентификации клиента.|Authorization: Bearer <token> или Authorization: Basic dXNlcjpwYXNz|
|**Host**|Указывает домен и порт сервера (обязателен в HTTP/1.1).|Host: example.com|
|**User-Agent**|Описывает клиентское приложение (браузер, устройство, ОС).|User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/117.0.0.0|
|**Referer**|Указывает URL страницы, с которой был сделан запрос.|Referer: https://example.com/page|
|**Origin**|Указывает источник запроса (используется для CORS).|Origin: https://example.com|
|**If-Modified-Since**|Условный запрос: возвращает ресурс, если он был изменен после указанной даты.|If-Modified-Since: Sat, 31 May 2025 10:00:00 GMT|
|**If-None-Match**|Условный запрос: использует ETag для проверки, изменился ли ресурс.|If-None-Match: "abc123"|
|**Cookie**|Передает cookie, ранее установленные сервером.|Cookie: sessionId=abc123|

### 3. Заголовки ответа (Response Headers)

Используются сервером для передачи информации об ответе.

|Заголовок|Описание|Пример|
|---|---|---|
|**Access-Control-Allow-Origin**|Указывает, какие источники могут получать доступ к ресурсу (CORS).|Access-Control-Allow-Origin: * или Access-Control-Allow-Origin: https://example.com|
|**ETag**|Уникальный идентификатор версии ресурса для кэширования и условных запросов.|ETag: "abc123"|
|**Location**|Указывает URL для перенаправления (используется с кодами 3xx).|Location: https://example.com/new-page|
|**Server**|Содержит информацию о сервере (название, версия).|Server: Apache/2.4.41 (Ubuntu)|
|**Set-Cookie**|Устанавливает cookie на стороне клиента.|Set-Cookie: sessionId=abc123; HttpOnly; Secure|
|**WWW-Authenticate**|Указывает метод аутентификации при ответе 401 Unauthorized.|WWW-Authenticate: Basic realm="Access to the staging site"|

### 4. Заголовки сущности (Entity Headers)

Описывают содержимое тела запроса или ответа.

|Заголовок|Описание|Пример|
|---|---|---|
|**Content-Length**|Указывает размер тела сообщения в байтах.|Content-Length: 1024|
|**Content-Type**|Указывает MIME-тип содержимого (например, HTML, JSON, изображение).|Content-Type: application/json; charset=UTF-8|
|**Content-Encoding**|Указывает метод сжатия содержимого.|Content-Encoding: gzip|
|**Content-Language**|Указывает язык содержимого.|Content-Language: en-US|
|**Content-Disposition**|Указывает, как обрабатывать содержимое (например, как файл для скачивания).|Content-Disposition: attachment; filename="file.pdf"|
|**Last-Modified**|Указывает дату последнего изменения ресурса.|Last-Modified: Sat, 31 May 2025 10:00:00 GMT|
|**Allow**|Указывает поддерживаемые HTTP-методы для ресурса (в ответах 405 Method Not Allowed).|Allow: GET, POST, HEAD|

---

## Дополнительные аспекты

### 1. **Кастомные заголовки**

- Пользовательские заголовки можно создавать для специфических нужд, обычно с префиксом X- (например, X-API-Key). Однако в современных стандартах рекомендуется избегать префикса X- и использовать осмысленные имена.

### 2. **Безопасность**

- Некоторые заголовки напрямую связаны с безопасностью:
    - Strict-Transport-Security (HSTS): Принуждает использовать HTTPS.
        - Пример: Strict-Transport-Security: max-age=31536000; includeSubDomains
    - Content-Security-Policy (CSP): Ограничивает источники загрузки ресурсов.
        - Пример: Content-Security-Policy: default-src 'self'
    - X-Content-Type-Options: Запрещает браузеру интерпретировать файлы с неверным MIME-типом.
        - Пример: X-Content-Type-Options: nosniff
    - X-Frame-Options: Защищает от clickjacking, запрещая встраивание страницы в iframe.
        - Пример: X-Frame-Options: DENY

### 3. **Заголовки в HTTP/2 и HTTP/3**

- В HTTP/2 и HTTP/3 заголовки сжимаются с использованием алгоритмов **HPACK** (HTTP/2) и **QPACK** (HTTP/3), что уменьшает их объем.
- Структура заголовков остается той же, но их передача более эффективна.

### 4. **Пример HTTP-запроса и ответа**

**Запрос:**

text

Копировать

`GET /api/users HTTP/1.1 Host: example.com Accept: application/json Accept-Encoding: gzip, deflate User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/117.0.0.0 Authorization: Bearer abc123`

**Ответ:**

text

Копировать

`HTTP/1.1 200 OK Date: Sat, 31 May 2025 11:02:00 GMT Server: Apache/2.4.41 Content-Type: application/json; charset=UTF-8 Content-Length: 123 Cache-Control: max-age=3600 ETag: "xyz789" {"users": [...]}`

---

## Когда и как использовать заголовки

- **Для клиентов**:
    - Указывайте Accept и Accept-Encoding для получения нужного формата и сжатия.
    - Используйте Authorization для аутентификации.
    - Добавляйте If-Modified-Since или If-None-Match для условных запросов.
- **Для серверов**:
    - Используйте Content-Type и Content-Length для описания ответа.
    - Настройте Cache-Control для оптимизации кэширования.
    - Добавляйте заголовки безопасности, такие как Strict-Transport-Security и Content-Security-Policy.