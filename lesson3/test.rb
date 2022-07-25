class Warrior < Player
  def initialize(name)
    super
    @strength += 2
  end
  include Armor
end
