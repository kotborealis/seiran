function factorial(n)
  local ret = 1;
  if n ~= 0 then
    ret = n * factorial(n - 1);
  end
  return ret;
end

print(factorial(10))
