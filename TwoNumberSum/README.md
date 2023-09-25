<h2>Two Number Sum</h2>
<p>
  Write a function that takes in a non-empty array of distinct integers and an
  integer representing a target sum. If any two numbers in the input array sum
  up to the target sum, the function should return them in an array, in any
  order. If no two numbers sum up to the target sum, the function should return
  an empty array.
</p>
<p>
  Note that the target sum has to be obtained by summing two different integers
  in the array; you can't add a single integer to itself in order to obtain the
  target sum.
</p>
<p>
  You can assume that there will be at most one pair of numbers summing up to
  the target sum.
</p>
<h3>Sample Input</h3>
<pre><span>array</span> = [3, 5, -4, 8, 11, 1, -1, 6]
<span>targetSum</span> = 10
</pre>
<h3>Sample Output</h3>
<pre>[-1, 11] <span>// the numbers could be in reverse order</span>
</pre>

</br>
</br>
<h2>Solutions</h2>
<h3>Solution with O(n) Time Complexity and O(1) Space Complexity</h3>
<ul>
<li>We need to sort the array first</li>
<li>We need to store the initial left most array item and last array item</li>
<li>We need to loop through the array until left value is less than right value</li>
<li>We will check if the left + right value is equal to target value</li>
<li>If the value is equal to target value we will return new array consisting left and right value</li>
<li>if the value is not equal to target we will check if the left+right value is less than target value we need to set the left value to its next array item.</li>
<li>if the value is not equal to target we will check if the left+right value is greater than target value we need to set the right value to its previous array item.</li>
<li>If we don't get the target value in the array we will finally return empty array</li>
</ul>
<h3>Complexity Analysis</h3>
<p>We are sorting array which we can consider time complexity of O(Logn).We loop trough all the item so for time complexity it is O(n) which is linear. So the total time complexity should be O(Logn) + O(n). Big-O notation gives us a way to compare different algorithms based on their growth rates, and ignore the constant factors or lower order terms that do not affect the algorithm's performance much in the long run. SO we can say that for this algorithm it is O(n) time complexity. We are initialize new variable to store left and right value which we are reassigning. So the space complexity is O(1) which is constant.</p>

</br>
<h3>Solution with O(n) Time Complexity and O(n) Space Complexity</h3>
<ul>
<li>We need to initialize a hashmap data structure. we will store all the visited array on the hashmap</li>
<li>We need to loop through the array</li>
<li>On the loop we get the item value and the target value. So we can say the expected number to get the result by subtracting the every item value from target value</li>
<li>If the  expected result is on the hashmap we return an array consisting item value and expected value</li>
<li>if the expected value is not in the hashmap we store the item value to the hashmap</li>
<li>If we don't get the target value in the array we will finally return empty array</li>
</ul>
<h3>Complexity Analysis</h3>
<p>We loop trough all the item so for time complexity it is O(n) which is linear. We are initialize new hashmap to store all the visited node. So the space complexity is O(n) as considering worst case we have to define every element to the hashmap. So the space complexity is O(n)</p>
</br>
<h3>Solution with O(n^2) Time Complexity and O(1) Space Complexity</h3>
<ul>
<li>We going for brute force solution</li>
<li>We need to loop through the array</li>
<li>for every array item we need to go through all the other items</li>
<li>We will check first loop item value + second loop item value is equal to the target value</li>
<li>if we match the target value we wil return a new array consisting first array item value and second array item value</li>
<li>If we don't get the target value in the array we will finally return empty array</li>
</ul>
<h3>Complexity Analysis</h3>
<p>We loop trough all the item  twice so for time complexity it is O(n^2). We are not initialize any new variable. So the space complexity is O(1)</p>
