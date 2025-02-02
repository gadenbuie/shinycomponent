from __future__ import annotations

from htmltools import Tag, TagAttrs, TagAttrValue, TagChild

from ._htmldeps import page_dep


def greeting_card(
    *args: TagChild | TagAttrs, _add_ws: bool = True, **kwargs: TagAttrValue
) -> Tag:
    """
    Create a <greeting-card> tag.

    An experimental web-component for creating greeting cards.

    Parameters
    ----------
    *args
        Child elements to this tag.
    _add_ws
        Whether whitespace should be added around this tag.
    **kwargs
        Attributes to this tag.

    Returns
    -------
    Tag

    See Also
    --------
    ~htmltools.Tag
    """

    return Tag("greeting-card", *args, _add_ws=_add_ws, **kwargs)


def avatar(
    *args: TagChild | TagAttrs, _add_ws: bool = True, **kwargs: TagAttrValue
) -> Tag:
    """
    Create a <shiny-avatar> tag.

    See Also
    --------
    ~htmltools.Tag
    """

    return Tag("shiny-avatar", page_dep(), *args, _add_ws=_add_ws, **kwargs)


def tab(
    *args: TagChild | TagAttrs, _add_ws: bool = True, **kwargs: TagAttrValue
) -> Tag:
    """
    Create a <shiny-tab> tag.

    An experimental web-component for creating greeting cards.

    Parameters
    ----------
    *args
        Child elements to this tag.
    _add_ws
        Whether whitespace should be added around this tag.
    **kwargs
        Attributes to this tag.

    Returns
    -------
    Tag

    See Also
    --------
    ~htmltools.Tag
    """

    return Tag("shiny-tab", page_dep(), *args, _add_ws=_add_ws, **kwargs)


def grid(
    *args: TagChild | TagAttrs,
    _add_ws: bool = True,
    nRows: int = 1,
    nCols: int = 2,
    **kwargs: TagAttrValue,
) -> Tag:
    """
    Create a <shiny-grid> tag.

    An experimental web-component for creating greeting cards.

    Parameters
    ----------
    *args
        Child elements to this tag.
    _add_ws
        Whether whitespace should be added around this tag.
    nRows
        Number of rows in the grid.
    nCols
        Number of columns in the grid.
    **kwargs
        Attributes to this tag.

    Returns
    -------
    Tag

    See Also
    --------
    ~htmltools.Tag
    """

    return Tag(
        "shiny-grid",
        page_dep(),
        *args,
        _add_ws=_add_ws,
        nRows=nRows,
        nCols=nCols,
        **kwargs,
    )


def grid_item(
    *args: TagChild | TagAttrs, _add_ws: bool = True, **kwargs: TagAttrValue
) -> Tag:
    """
    Create a <shiny-grid-item> tag.

    An experimental web-component for creating greeting cards.

    Parameters
    ----------
    *args
        Child elements to this tag.
    _add_ws
        Whether whitespace should be added around this tag.
    **kwargs
        Attributes to this tag.

    Returns
    -------
    Tag

    See Also
    --------
    ~htmltools.Tag
    """

    return Tag("shiny-grid-item", page_dep(), *args, _add_ws=_add_ws, **kwargs)


def sidebar(
    *args: TagChild | TagAttrs, _add_ws: bool = True, **kwargs: TagAttrValue
) -> Tag:
    """
    Create a <shiny-sidebar> tag.

    An experimental web-component for creating greeting cards.

    Parameters
    ----------
    *args
        Child elements to this tag.
    _add_ws
        Whether whitespace should be added around this tag.
    **kwargs
        Attributes to this tag.

    Returns
    -------
    Tag

    See Also
    --------
    ~htmltools.Tag
    """
    return Tag("shiny-sidebar", page_dep(), *args, _add_ws=_add_ws, **kwargs)


def simple_number_input(
    id: str, *args: TagChild | TagAttrs, _add_ws: bool = True, **kwargs: TagAttrValue
) -> Tag:
    """
    Create a <simple-number-input> tag.

    A WebComponent for creating number inputs.

    Parameters
    ----------
    *args
        Child elements to this tag.
    _add_ws
        Whether whitespace should be added around this tag.
    **kwargs
        Attributes to this tag.

    Returns
    -------
    :
        Tag

    See Also
    --------
    ~htmltools.Tag
    """

    return Tag(
        "simple-number-input", page_dep(), id=id, *args, _add_ws=_add_ws, **kwargs
    )


def icon_section(
    *args: TagChild | TagAttrs, _add_ws: bool = True, **kwargs: TagAttrValue
) -> Tag:
    """
    Create a <shiny-section> tag.

    A WebComponent for sections with a left-side icon. Can be paired with sidebar to
    create a sidebar collapsible to icons.

    Parameters
    ----------
    *args
        Child elements to this tag.
    _add_ws
        Whether whitespace should be added around this tag.
    **kwargs
        Attributes to this tag.

    Returns
    -------
    :
        Tag

    See Also
    --------
    ~htmltools.Tag
    """

    return Tag("shiny-section", page_dep(), *args, _add_ws=_add_ws, **kwargs)


def footer(
    *args: TagChild | TagAttrs, _add_ws: bool = True, **kwargs: TagAttrValue
) -> Tag:
    """
    Create a <shiny-section> tag.

    A WebComponent for footer to be pared with `tabset`.

    Parameters
    ----------
    *args
        Child elements to this tag.
    _add_ws
        Whether whitespace should be added around this tag.
    **kwargs
        Attributes to this tag.

    Returns
    -------
    :
        Tag

    See Also
    --------
    ~htmltools.Tag
    """

    return Tag("shiny-footer", page_dep(), *args, _add_ws=_add_ws, **kwargs)
