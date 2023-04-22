# frozen_string_literal: true

module RadixSort
  def self.sort(array)
    maxLen = GetMaxLength(array)
    (0..maxLen - 1).each do |i|
      buckets = Array.new(10) { Array.new }
      array.each do |j| buckets[GetDigit(j, i)].push(j) end
      array = Flatten(buckets)
    end
    return array
  end

  def self.GetDigit(number, index)
    divisor = 10 ** index
    return (number / divisor) % 10
  end

  def self.Flatten(buckets)
    array = []
    buckets.each do |k|
      array.push(k)
      array.flatten!
    end
    return array
  end

  def self.GetMaxLength(array)
    max = array.max
    return max.to_s.length
  end
end

puts RadixSort.sort([10, 2, 6, 4, 5, 12, 7, 8, 9, 10, 1, 7])
