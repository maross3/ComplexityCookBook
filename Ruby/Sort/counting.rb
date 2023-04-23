# frozen_string_literal: true

module CountingSort
  def self.sort(array)
    max = array.max
    count = Array.new(max + 1, 0)
    array.each do |i| count[i] += 1 end
    (1..max).each do |i| count[i] += count[i - 1] end
    output = Array.new(array.length)
    (array.length - 1).downto(0) do |i|
      output[count[array[i]] - 1] = array[i]
      count[array[i]] -= 1
    end
    return output
  end
end

puts CountingSort.sort([10, 2, 6, 4, 5, 12, 7, 8, 9, 10, 1, 7])
