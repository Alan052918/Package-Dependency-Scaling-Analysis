with open("repos.csv", "r") as table:
    r = 0
    w = 0
    s = 0
    f = 0
    for line in table:
        tok = line.split(",")
        if tok[0] == "name":
            continue
        name = tok[0]
        weight = 2 * int(tok[1]) + 3 * int(tok[2]) + 4 * int(tok[3])

        # output weight table
        print("{},{}".format(name, weight))
        w += int(tok[1])
        s += int(tok[2])
        f += int(tok[3])
        r += 1
    # output statistical summary
    # print("{} repos, total watch {}, total star {}, total fork {}".format(r, w, s, f))
