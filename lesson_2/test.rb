
class Employee
  def initialize(name, serial)
  # states : name, serial_number, ranking.
  end

  def to_s
    "Name : #{name}"
    "Type : #{type}"
    "Serial number : #{serial}"
    "Vacation Days : #{vacation}"
    "Desk : #{desk}"
  end
end

class FullTime < Employee
  attr_reader :desk, :vacation, :type

  def initialize(name, serial)
    @name = name
    @serial = serial
    @desk = self::DESK
    @vacation = self::VACTION
    @type = self
  end

  def take_vacation
  end

end

class Executive < FullTime
  DESK = "Corner Office"
  VACATION = 20

end

class Manager < FullTime
  DESK = "Private Office"
  VACATION = 14
end

class Regular < FullTime
  DESK = "Desk in cubicle farm"
  VACATION = 10
end

class PartTime < Employee
  DESK = "Open Workspace"
  VACATION = 0

  attr_reader :vacation, :type, :desk

  def initialize(name, serial)
    super
    @vacation = VACATION
    @desk = DESK
    @type = self
  end
end

dave = Manager.new("Dave", 123456789)
puts dave
