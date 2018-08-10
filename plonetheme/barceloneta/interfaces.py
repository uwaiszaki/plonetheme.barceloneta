# -*- coding: utf-8 -*-
try:
    # plone.theme was moved to Products.CMFPlone in Plone 5.2
    #
    # can be removed ass soon as this package is not used for Plone < 5.2
    # any more
    from Products.CMFPlone.interfaces import IDefaultPloneLayer
except ImportError:
    from plone.theme.interfaces import IDefaultPloneLayer


class IBarcelonetaLayer(IDefaultPloneLayer):
    """Marker interface that defines a Zope 3 browser layer and a plone skin
       marker.
    """
