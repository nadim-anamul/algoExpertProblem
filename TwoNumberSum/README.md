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
<p>We loop trough all the item so for time complexity it is O(n) which is linear. We are initialize new variable to store left and right value which we are reassigning. So the space complexity is O(1) which is constant.</p>
