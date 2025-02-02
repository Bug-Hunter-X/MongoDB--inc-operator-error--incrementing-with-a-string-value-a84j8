# MongoDB $inc Operator Error
This repository demonstrates a common error when using the `$inc` operator in MongoDB updates.  The `$inc` operator is used to increment a numerical field by a specified value.  However, attempting to increment with a string value will result in an error.

## Bug
The bug lies in the incorrect usage of the `$inc` operator. The provided update attempts to increment the `count` field by the string '1', rather than the number 1.

## Solution
The solution involves correctly specifying a numerical value for the increment operation.
