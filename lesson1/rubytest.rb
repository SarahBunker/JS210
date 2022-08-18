arr = ['a', 'b', 'c']

def foo(array)
  array.map do |el|
    yield(el)
  end
end

foo(arr) do |value|
  # print hsh #undefined local variable or method `hsh' for main:Object (NameError)
  print bar(4) # undefined method `bar' for main:Object (NoMethodError)
end

hsh = { a: 3, b: 2, c: 5 }

def bar(qux)
  qux += 2
end
