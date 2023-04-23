# frozen_string_literal: true

class CircularQueue

  def dequeue
    element = @queue[@tail]
    @queue[@tail] = nil
    @tail = advance(@tail) if element != nil
    element
  end

  def enqueue(value)
    @tail = advance(@head) if @queue[@head] != nil
    @queue[@head] = value
    @head = advance(@head)
  end

  def initialize(size)
    @size = size
    @queue = Array.new(size)
    @head = 0
    @tail = 0
  end

  private

  attr_accessor :queue, :size, :head, :tail

  def advance(index)
    (index + 1) % @size
  end
end

queue = CircularQueue.new(3)
puts queue.dequeue == nil

queue.enqueue(1)
queue.enqueue(2)
puts queue.dequeue == 1

queue.enqueue(3)
queue.enqueue(4)

puts queue.dequeue == 2

queue.enqueue(5)
queue.enqueue(6)
queue.enqueue(7)
puts queue.dequeue == 5
puts queue.dequeue == 6
puts queue.dequeue == 7
puts queue.dequeue == nil


queue = CircularQueue.new(4)
puts queue.dequeue == nil

queue.enqueue(1)
queue.enqueue(2)
puts queue.dequeue == 1

queue.enqueue(3)
queue.enqueue(4)
puts queue.dequeue == 2

queue.enqueue(5)
queue.enqueue(6)
queue.enqueue(7)
puts queue.dequeue == 4
puts queue.dequeue == 5
puts queue.dequeue == 6
puts queue.dequeue == 7
puts queue.dequeue == nil