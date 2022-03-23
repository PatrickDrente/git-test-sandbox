default: release

version:
	node .\changelogCreator.js $(NEW-VERSION)


release:
	avr-gcc -v &> SomeFile.txt