release:
	avr-gcc -v &> SomeFile.txt

version:
	node .\changelogCreator.js $(NEW-VERSION)
