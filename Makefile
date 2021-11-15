NEW-VERSION= current

version-bump:
	node .\changelogCreator.js $(NEW-VERSION)