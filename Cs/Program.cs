using System.Diagnostics;
using ComplexityCookbook.Sorting;
// todo make a runner for cs files
// this is awful. I need test cases for all of these and a test runner.
// we can then write a shell script to run all runners in the cookbook to maintain quality
// anytime an edge case is found, we can add it to the test cases.
// this will also help with the cookbook's documentation.
// we can also use this to generate the cookbook's documentation.

// Whenever they are done, use openAI api to fetch a ton of tests
Console.WriteLine("Radix sort for base10:");

var list = new List<int> {999999, 12345, 9876, 555, 54321, 67890, 1, 9999, 123, 0};
Radix.BaseTenSort(list);


list = new List<int> {10, 2, 6, 4, 5, 12, 7, 8, 9, 10, 1, 7};

Radix.BaseTenSort(list);

foreach (var num in list)
    Console.Write(num + " ");
Console.WriteLine();
Console.WriteLine();

Console.WriteLine("Max sort from 0:");
list = new List<int> {4, 1, 0, 19, 14, 8, 11, 19, 2, 5, 6, 7, 18, 20, 3, 5, 8, 9, 10, 13};
Counting.Sort(list, 20);
foreach (var num in list)
    Console.Write(num + " ");
Console.WriteLine();
Console.WriteLine();

Console.WriteLine("Ranged Counting Sort 10-30:");
list = new List<int> {10, 12, 15, 14, 20, 18, 16, 25, 22, 28};
Counting.Sort(list, 10, 30);
foreach (var num in list)
    Console.Write(num + " ");
var hexList = new List<uint> { 
    0xABCDEF01, 
    0x01234567, 
    0x89ABCDEF, 
    0x456789AB, 
    0xDEADBEEF,
    0xCAFEBABE,
    0xFEEDFACE,
    0xBAADF00D,
    0xCAFEBABE,
    0xDEADBEEF,
    0xFEEDFACE,
    0xBAADF00D,
    0xABCDEF01, 
    0x01234567, 
    0x89ABCDEF, 
    0x456789AB
};
var solution = new List<uint> {
    0x01234567, 
    0x01234567, 
    0x456789AB, 
    0x456789AB, 
    0x89ABCDEF, 
    0x89ABCDEF, 
    0xABCDEF01, 
    0xABCDEF01, 
    0xBAADF00D, 
    0xBAADF00D, 
    0xCAFEBABE, 
    0xCAFEBABE, 
    0xDEADBEEF, 
    0xDEADBEEF, 
    0xFEEDFACE, 
    0xFEEDFACE
};


Radix.BaseHexSort(hexList);

Console.WriteLine();
Console.WriteLine();
Console.WriteLine("Hex sort:");
for(var i = 0; i < hexList.Count; i++)
{
    Debug.Assert(hexList[i] == solution[i]);
    Console.Write(hexList[i].ToString("X8") + " ");
}