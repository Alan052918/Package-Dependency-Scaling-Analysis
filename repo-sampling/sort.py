with open("repo.csv", "r") as table:
    for line in table:
        tok = line.split(",")
        if tok[0] == "name":
            continue
        name = tok[0]
        weight = 2 * int(tok[1]) + 3 * int(tok[2]) + 4 * int(tok[3])
        print("{},{}".format(name, weight))
