# Weather-App-Demo

A scratch repository holding small, self-contained test files in several languages — Python, JavaScript, HTML, and Terraform. It exists for practising Git workflows and trying out API calls, not as a single working application.

![Python](https://img.shields.io/badge/Python-3-3776AB?logo=python&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2017+-F7DF1E?logo=javascript&logoColor=black)
![Terraform](https://img.shields.io/badge/Terraform-placeholder-7B42BC?logo=terraform&logoColor=white)

> **Scope:** the files here are unrelated to one another. Despite the repository name, only `python.py` concerns weather.

---

## Contents

| File | Language | What it does |
| --- | --- | --- |
| [`python.py`](python.py) | Python | Fetches current weather for a city from the OpenWeatherMap API |
| [`main.js`](main.js) | JavaScript | Fetches and prints a random joke from a public API |
| [`index.html`](index.html) | HTML | A minimal "Hello World" page |
| [`main.tf`](main.tf) | Terraform | Currently empty — a placeholder for future configuration |

---

## `python.py` — weather lookup

Calls the [OpenWeatherMap](https://openweathermap.org/api) current-weather endpoint and prints the temperature and conditions for a city, in metric units. It is hardcoded to look up Lagos.

### Requirements

- Python 3
- The `requests` library:

  ```bash
  pip install requests
  ```

- A free OpenWeatherMap API key

### Usage

The script contains a placeholder where the key belongs:

```python
api_key = "your_api_key_here"
```

Replace it with a real key, then run:

```bash
python python.py
```

Expected output:

```text
The weather in Lagos is 28.4°C with scattered clouds.
```

If the city is unrecognised or the key is invalid, the script prints `City not found or API error.`

To look up somewhere else, change the argument on the last line:

```python
get_weather("Abuja")
```

> **Before adding a real key:** read the API key as an environment variable rather than editing it into the file, so it cannot be committed by accident.
>
> ```python
> import os
> api_key = os.environ["OPENWEATHER_API_KEY"]
> ```
>
> Then run it as `OPENWEATHER_API_KEY=xxxx python python.py`.

---

## `main.js` — random joke

An `async` function that fetches a joke from `official-joke-api.appspot.com` and logs the setup and punchline, with `try`/`catch` around the request.

Run it with Node.js 18 or later, which provides `fetch` natively:

```bash
node main.js
```

It also runs in any browser console, or by loading it from a `<script>` tag.

---

## `index.html`

A minimal valid HTML5 document rendering `Hello World`. Open it directly in a browser — no build step or server needed.

---

## `main.tf`

Currently an empty file. It is a placeholder for Terraform configuration; nothing will happen if you run `terraform init` or `terraform plan` against it.

---

## License

No license has been specified for this repository. Without one, default copyright applies and others have no permission to reuse the code.
