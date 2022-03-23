release:
	echo bla>bla.txt

version:
	node .\changelogCreator.js $(NEW-VERSION)
