
<!--#echo json="package.json" key="name" underline="=" -->
now-ymd
=======
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Return current date (y)ymmdd as number. Mind the evil overflow at the
beginning of each century.
<!--/#echo -->



API
---

This module exports one function which holds another function:

### nowYmdNum()

Return the current date in (y)ymmdd format as a number.


### nowYmdNum.t()

As above, but add current time `.HHMMSS` as fraction.




<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
