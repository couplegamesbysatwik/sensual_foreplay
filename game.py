import random

# Column 1: actions
actions = ["Sensually Lick", "Firmly Bite", "Sensually Pinch", "Sensually Squeeze","Sensually Suck", "Sensually Massage","Sensually stroke", "Passionately kiss", "Firmly squeeze", "Playfully slap", "Firmly slap", "Sensually blow on", "Gently massage", "Firmly spank", "Breathe hot air on", "Gently touch and tease", "Playfully tease and tantalize", "Sensually stroke and caress"]

# Column 2: body parts - a simple list of common parts
body_parts = [
    "stomach", "back", "neck", "face", "cheek", "lips", "ear","forehead", "thigh", "finger", "toe", "chest", "boobs", "Clitoris", "Vagina", "waist", "butt", "Penis", "testicles",    "pubic area", "inner thigh","anus", "vulva"
]


def pick_random():
    """Pick a random action and body part and return a formatted string."""
    action = random.choice(actions)
    part = random.choice(body_parts)
    return f"{action} {part}"


def main():
    print("Welcome to the random action/body-part game!")
    print("Press Enter to generate a combination, or type 'quit' to exit.")
    while True:
        user = input('> ')
        if user.lower().startswith('q'):
            break
        print(pick_random())


if __name__ == '__main__':
    main()
