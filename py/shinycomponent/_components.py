from __future__ import annotations

from typing import TYPE_CHECKING

from htmltools import Tag, TagAttrs, TagAttrValue, TagChild, tags

from ._htmldeps import page_dep

if TYPE_CHECKING:
    import pandas as pd


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


def tabset(
    *args: TagChild | TagAttrs, _add_ws: bool = True, **kwargs: TagAttrValue
) -> Tag:
    """
    Create a <shiny-tabset> tag.

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

    return Tag("shiny-tabset", page_dep(), *args, _add_ws=_add_ws, **kwargs)


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


def tanstack_table(
    data: pd.DataFrame,
    *args: TagChild | TagAttrs,
    _add_ws: bool = True,
    **kwargs: TagAttrValue,
) -> Tag:
    return Tag(
        "tanstack-table",
        page_dep(),
        tags.script(
            data.to_json(orient="records"), type="application/json", class_="data"
        ),
        *args,
        _add_ws=_add_ws,
        **kwargs,
    )
