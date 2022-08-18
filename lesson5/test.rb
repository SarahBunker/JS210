arr = [1, 2, 3, 4, 5]
new_arr = []

index = 0

loop do
  num = arr[index]
  new_arr << num * 2
  index += 1
  break if index == arr.length
end

p new_arr # => [2, 4, 6, 8, 10]
