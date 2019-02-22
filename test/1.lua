function while_test(n)
    i = 0
    while i < n do
        i = i + 1
        print(i)
        if i >= 50 then break end
    end
end

while_test(1000)