i = 0
while i < 10 do
    j = 0
    while j < 10 do
        print("i="..i, "j="..j)
        if j == 5 then break end
        j = j + 1
    end
    i = i + 1
end