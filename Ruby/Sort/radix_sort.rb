# frozen_string_literal: true

module RadixSort
  def self.sort(array)
    maxLen = get_max_length(array)
    (0..maxLen - 1).each do |i|
      buckets = Array.new(10) { Array.new }
      array.each do |j| buckets[get_digit(j, i)].push(j) end
      array = flatten(buckets)
    end
    return array
  end

  def self.get_digit(number, index)
    divisor = 10 ** index
    return (number / divisor) % 10
  end

  def self.flatten(buckets)
    array = []
    buckets.each do |k|
      array.push(k)
      array.flatten!
    end
    return array
  end

  def self.get_max_length(array)
    max = array.max
    return max.to_s.length
  end
end

puts RadixSort.sort([10, 2, 6, 4, 5, 12, 7, 8, 9, 10, 1, 7])
