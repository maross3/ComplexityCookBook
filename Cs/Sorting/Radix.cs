namespace ComplexityCookbook.Sorting;
// todo, make a hex radix sort for base 16
/// <summary>
/// * Radix sort for base 10 and (soon) hex numbers.<br></br>
/// * Radix sort is a non-comparison sort that is O(nk) where n is the number of elements and k is the number of digits in the largest number.<br></br>
/// * It works by sorting the numbers by their digits, starting with the least significant digit. <br></br>
/// </summary>
public static class Radix
{
    private const int _HEX_RADIX = 16;
    private const int _RADIX = 10;
    /// <summary>
    /// Sort based on the max number of digits of all values in the list, assumes base 10 number sets.
    /// </summary>
    /// <RuntimeComplexity>
    /// O(nk)  Ω(nk)
    /// </RuntimeComplexity>
    /// <StorageComplexity>
    /// O(nk)  Ω(nk)
    /// </StorageComplexity>
    /// <param name="list">Input with n elements.</param>
    public static void BaseTenSort(List<int> list)
    {
        var maxLength = 0;

        // grab the max length
        for (var i = 1; i < list.Count; i++)
            if (list[i].ToString().Length > maxLength)
                maxLength = list[i].ToString().Length;

        // k
        for (var i = 0; i < maxLength; i++)
        {
            var buckets = new List<List<int>>(_RADIX);

            // radix is const, drops from O(2nk) => O(nk)
            for (var j = 0; j < _RADIX; j++)
                buckets.Add(new List<int>());

            // n
            foreach (var number in list)
                buckets[GetDigit(number, i)].Add(number);

            list.Clear();
            
            // also const
            foreach (var bucket in buckets)
                list.AddRange(bucket);
        }
    }

    /// <summary>
    /// Sort based on the max number of digits of all values in the list, assumes a valid hex number set.
    /// </summary>
    /// <RuntimeComplexity>
    /// O(nk)  Ω(nk)
    /// </RuntimeComplexity>
    /// <StorageComplexity>
    /// O(nk)  Ω(nk)
    /// </StorageComplexity>
    /// <param name="list">Input with n elements.</param>
    public static void BaseHexSort(List<uint> list)
    {
        var maxLength = 0;

        // grab the max length
        for (var i = 1; i < list.Count; i++)
            if (list[i].ToString().Length > maxLength)
                maxLength = list[i].ToString().Length;

        // k
        for (var i = 0; i < maxLength; i++)
        {
            var buckets = new List<List<uint>>(_HEX_RADIX);

            // radix is const, drops from O(2nk) => O(nk)
            for (var j = 0; j < _HEX_RADIX; j++)
                buckets.Add(new List<uint>());

            // n
            foreach (var number in list)
                buckets[HexCharToInt(GetHexDigit(number, i))].Add(number);

            list.Clear();
            
            // also const
            foreach (var bucket in buckets)
                list.AddRange(bucket);
        } 
    }
    
    /// <summary>
    /// Gets the digit at the specified index of the number.
    /// </summary>
    /// <param name="number">The current number being analyzed.</param>
    /// <param name="digitIndex">The index of digit's place to return.</param>
    /// <example>
    /// 28, 0 == 8<br></br>
    /// 28, 1 == 2
    /// </example>
    private static int GetDigit(int number, int digitIndex)
    {
        var divisor = (int) Math.Pow(10, digitIndex);
        return number / divisor % 10;
    }
    
    private static char GetHexDigit(uint number, int digit)
    {
        var hexString = number.ToString("X");
        var index = hexString.Length - digit - 1;
        if (index >= 0 && index < hexString.Length)
            return hexString[index]; 
        return '0';
    }
    
    private static int HexCharToInt(char c)
    {
        if (c >= '0' && c <= '9') return c - '0';
        if (c >= 'A' && c <= 'F') return c - 'A' + 10;
        if (c >= 'a' && c <= 'f') return c - 'a' + 10;
            
        throw new ArgumentException("Invalid hexadecimal character: " + c);
    }
}