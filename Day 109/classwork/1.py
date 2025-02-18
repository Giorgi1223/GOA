def maskify(s):
    return '#' * (len(s) - 4) + s[-4:] if len(s) > 4 else s