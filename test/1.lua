function factorial(n)
  if n == 0 then
    return 1;
  else
    return n * factorial(n - 1);
  end
end

local i = 0
while i < 10 do
    i = i + 1
    print(i)
    if i == 5 then break end
end

print(factorial(10))
