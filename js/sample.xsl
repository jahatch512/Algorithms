<?xml version="1.0"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" version="4.0"/>
<xsl:template match="/">
<html>
<head>
<meta http-equiv="Pragma" content="no-cache"/>
<meta http-equiv="Cache-control" content="no-cache, no-store,
must-revalidate"/>
<meta http-equiv="Expires" content="01 Jan 1990 00:00:00 GMT"/>
<meta http-equiv="Content-Type" content="text/html;
charset=iso-8859-1"/>

<title>Message</title>

</head>
<body>
<xsl:apply-templates select="*"/>

</body>
</html>
</xsl:template>
<xsl:template match="chapter">
<xsl:apply-templates select="*"/>
</xsl:template>
<xsl:template match="title">
<h1><xsl:value-of select="node()"/></h1>
</xsl:template>
<xsl:template match="body">
<h2><xsl:value-of select="node()"/></h2>
</xsl:template>
</xsl:stylesheet>
