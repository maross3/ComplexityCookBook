namespace ComplexityCookbook.Sorting;
/// <summary>
/// 0(n + k)
/// </summary>
public static class Counting
{
    /// <summary>
    /// Sort where n ranges from min to max
    /// </summary>
    /// <RuntimeComplexity>
    /// O(n + k)  Ω(n + k)
    /// </RuntimeComplexity>
    /// <StorageComplexity>
    /// O(n + k) where k is the range of values in the list
    /// </StorageComplexity>
    public static void Sort(List<int> list, int max) 
    {
        var n = list.Count;
        var output = new int[n];
        var count = new int[max + 1]; 

        // occurrences
        for (var i = 0; i < n; i++) 
            count[list[i]]++; 

        // cumulative counts
        for (var i = 1; i <= max; i++) 
            count[i] += count[i - 1];

        for (var i = n - 1; i >= 0; i--) 
        {
            // get the 0 based count of each item in the list and store in output
            output[count[list[i]] - 1] = list[i];
           // decrement that number's count
            count[list[i]]--;
        }

        for (var i = 0; i < n; i++) 
            list[i] = output[i];
    } 
    

    /// <summary>
    /// Sort where n ranges from min to max
    /// </summary>
    /// <RuntimeComplexity>
    /// O(n + k)  Ω(n + k)
    /// </RuntimeComplexity>
    /// <StorageComplexity>
    /// O(n + k) where k is the range of values in the list
    /// </StorageComplexity>
    public static void Sort(List<int> list, int min, int max)
    {
        var n = list.Count;
        var range = max - min + 1;
        
        var output = new int[n];
        var count = new int[range]; 
        
        // occurrences
        for (var i = 0; i < n; i++) 
            count[list[i] - min]++;

        // cumulative counts
        for (var i = 1; i < range; i++) 
            count[i] += count[i - 1];

        for (var i = n - 1; i >= 0; i--) 
        {
            // get the 0 based count of each item in the list and store in output
            output[count[list[i] - min] - 1] = list[i];
            
            // decrement that number's count
            count[list[i] - min]--;
        }

        for (var i = 0; i < list.Count; i++) 
            list[i] = output[i];
    }  
    
}