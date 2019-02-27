a = {1,2,3}
print(a)
print(a[1])
print(a[2])
print(a[3])

a = {a = 1, b = 2, c = 3}
print(a)
print(a.a)
print(a.b)
print(a.c)
print(a["a"])
print(a["b"])
print(a["c"])


a = {["v"] = 1, ["y"] = 2, ["f"] = 3}
print(a)
print(a.v)
print(a.y)
print(a.f)
print(a["v"])
print(a["y"])
print(a["f"])

a = {
    a = {
        a = {
            [0] = 1, 2, 3
        }
    }
}

print(a)