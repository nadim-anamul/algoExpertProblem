<h2>Validate Subsequence</h2>
<p>
  Given two non-empty arrays of integers, write a function that determines
  whether the second array is a subsequence of the first one.
</p>
<p>
  A subsequence of an array is a set of numbers that aren't necessarily adjacent
  in the array but that are in the same order as they appear in the array. For
  instance, the numbers <span>[1, 3, 4]</span> form a subsequence of the array
  <span>[1, 2, 3, 4]</span>, and so do the numbers <span>[2, 4]</span>. Note
  that a single number in an array and the array itself are both valid
  subsequences of the array.
</p>
<h3>Sample Input</h3>
<pre><span>array</span> = [5, 1, 22, 25, 6, -1, 8, 10]
<span >sequence</span> = [1, 6, -1, 10]
</pre>
<h3>Sample Output</h3>
<pre>true
</pre>

</br>
</br>
<h2>Solutions</h2>
<h3>Solution with O(n) Time Complexity and O(1) Space Complexity</h3>
<ul>
<li>We need to initialize an index to check the sequence array value with the given array value</li>
<li>We need to loop through the array</li>
<li>We wil check if the array item value is equal to sequence[index] value</li>
<li>If we find a match we will increase the index by 1</li>
<li>After finishing the array iteration we will get the value of the index variable which will be equal to sequence array length or not. If it is equal with the length the sequence array then sequence array is the subSequence of the given array. otherwise it is not</li>
</ul>
<h3>Complexity Analysis</h3>
<p>We Loop through the whole array once and it takes big O(n) times and we are assigning one variable to store the sequence match number. that's why it takes big O(1) space complexity.</p>
