import random
from conatus import action


@action
def get_current_weather(
    location: str, unit: str = "fahrenheit"
) -> dict[str, int | str]:
    if unit == "celsius":
        temperature = random.randint(-34, 43)
    else:
        temperature = random.randint(-30, 110)

    return {
        "temperature": temperature,
        "unit": unit,
        "location": location,
    }
