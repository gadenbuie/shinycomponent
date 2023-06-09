import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("posit-logo")
export class PositLogo extends LitElement {
  @property({ type: Boolean }) withName: boolean = false;
  @property({ type: Number }) width: number = 40;
  @property({ type: Number }) height: number = 40;

  static styles = css`
    svg {
      translate: 0 3.5px;
    }
  `;

  render() {
    const nameText = this.withName
      ? html`<path
          class="masked-path"
          d="M87.818 9.225c7.25 0 12.361 4.903 12.361 11.713S95.069 32.61 87.818 32.61c-7.252 0-12.275-4.903-12.275-11.672 0-6.768 5.023-11.713 12.275-11.713Zm0 17.528c3.451 0 5.81-2.17 5.81-5.815 0-3.644-2.62-5.856-5.81-5.856-3.19 0-5.723 2.125-5.723 5.856 0 3.299 2.316 5.815 5.723 5.815ZM128.042 0c2.053 0 3.538 1.46 3.538 3.389 0 2.026-1.485 3.484-3.538 3.484-2.227 0-3.583-1.458-3.583-3.484S125.944 0 128.042 0Zm-3.19 9.65h6.335v22.563h-6.335V9.65ZM134.045 9.65h4.325V4.4h6.334v5.25h6.845v5.857h-6.845v7.332c0 2.733.611 3.775 2.316 3.775 1.485 0 2.665-.52 3.887-1.475l3.227 3.973c-1.574 1.65-4.625 3.359-7.725 3.359-4.761 0-8.037-2.561-8.037-7.767v-9.199h-4.325V9.648l-.002.003ZM155.519 11.998h-.504v-1.942h-.644v-.417h1.791v.417h-.643v1.942ZM157.466 11.998l-.572-1.85h-.014c.021.377.031.629.031.754v1.096h-.45V9.639h.686l.562 1.803h.009l.595-1.803h.686v2.359h-.468V10.88c0-.053 0-.114.002-.181 0-.07.01-.251.021-.55h-.014l-.611 1.848h-.463ZM121.573 12.41c-1.553-1.48-4.773-3.392-9.346-3.392-6.512 0-10.343 2.675-10.343 7.062 0 6.808 10.917 6.973 13.495 8.476.466.258.742.618.576 1.142-.485 1.51-6.603 2.247-11.116-2.087l-3.681 4.36c1.639 2.155 5.255 4.686 11.121 4.686 5.449 0 10.16-2.193 10.16-7.192 0-4.482-4.203-6.285-7.94-7.34-1.064-.291-2.092-.531-2.981-.768-1.473-.375-3.447-.796-3.131-1.889.574-1.986 7.142-.742 9.439 1.347l3.754-4.403-.007-.003ZM50.88 9.704h6.344v1.175c1.18-1.087 3.326-1.652 5.077-1.652 6.913 0 11.203 4.738 11.203 11.432S69.04 32.654 62.125 32.654c-2.187 0-4.2-.346-4.9-1.13V41H50.88V9.704Zm6.344 7.955v7.215c.7 1.042 2.232 1.912 4.026 1.912 3.545 0 5.688-2.217 5.688-5.65 0-3.998-2.012-6.04-5.34-6.04-2.1 0-3.542 1.041-4.374 2.563Z"
          fill="#404041"
        ></path>`
      : null;
    return html`
      <svg width="1em" height="1em" viewBox="0 0 41 41" fill="none">
        <path
          d="m10.043 24.362 1.855.83 8.577-3.625-1.909-.808-8.523 3.603Z"
          fill="#447099"
        ></path>
        <path
          d="m12.034 16.384-1.874.821 8.404 3.555 1.909-.808-8.44-3.568Z"
          fill="#447099"
        ></path>
        <path
          d="m32.67 16.41-1.873-.824-8.474-3.719-1.85-.812L0 2.074v10.836l8.278 3.5 1.873-.822-8.657-3.66V4.353l17.13 7.515 1.849.814 8.44 3.703 1.873.821 5.973 2.622v1.944l-5.882 2.58-1.873.823-8.662 3.8-1.836.808-17.012 7.464v-7.655l8.53-3.607-1.854-.828L0 28.61v10.916L20.337 30.6l1.836-.805 8.716-3.826 1.873-.821 5.491-2.41v-3.88l-5.582-2.45Z"
          fill="#447099"
        ></path>
        <path
          d="m22.38 20.76 8.404-3.555-1.874-.82-8.44 3.567-1.907.807 1.908.808L29 25.174l1.874-.823-8.496-3.591ZM39.45 29.591v7.94l-17.278-7.737-1.836.807 20.611 9.227V28.61l-8.186-3.461-1.874.821 8.564 3.622ZM40.948 2.073l-20.475 8.983 1.85.811 17.129-7.515v7.576l-8.655 3.658 1.873.824 8.278-3.5V2.072Z"
          fill="#ED642F"
        ></path>
        <path
          d="m10.04 24.362-5.852-2.59v-1.945l5.97-2.622 1.874-.82 8.44-3.706-1.85-.812-8.473 3.72-1.875.823-5.583 2.449v3.88l5.478 2.416 1.854.83 8.482 3.797 1.835-.807-8.446-3.782-1.854-.83Z"
          fill="#ED642F"
        ></path>
        <path
          d="m10.043 24.362 1.855.83 8.577-3.625-1.909-.808-8.523 3.603Z"
          fill="#447099"
        ></path>
        <path
          d="m12.034 16.384-1.874.821 8.404 3.555 1.909-.808-8.44-3.568Z"
          fill="#447099"
        ></path>
        <path
          d="m32.67 16.41-1.873-.824-8.474-3.719-1.85-.812L0 2.074v10.836l8.278 3.5 1.873-.822-8.657-3.66V4.353l17.13 7.515 1.849.814 8.44 3.703 1.873.821 5.973 2.622v1.944l-5.882 2.58-1.873.823-8.662 3.8-1.836.808-17.012 7.464v-7.655l8.53-3.607-1.854-.828L0 28.61v10.916L20.337 30.6l1.836-.805 8.716-3.826 1.873-.821 5.491-2.41v-3.88l-5.582-2.45Z"
          fill="#447099"
        ></path>
        <path
          d="m22.38 20.76 8.404-3.555-1.874-.82-8.44 3.567-1.907.807 1.908.808L29 25.174l1.874-.823-8.496-3.591ZM39.45 29.591v7.94l-17.278-7.737-1.836.807 20.611 9.227V28.61l-8.186-3.461-1.874.821 8.564 3.622ZM40.948 2.073l-20.475 8.983 1.85.811 17.129-7.515v7.576l-8.655 3.658 1.873.824 8.278-3.5V2.072Z"
          fill="#ED642F"
        ></path>
        <path
          d="m10.04 24.362-5.852-2.59v-1.945l5.97-2.622 1.874-.82 8.44-3.706-1.85-.812-8.473 3.72-1.875.823-5.583 2.449v3.88l5.478 2.416 1.854.83 8.482 3.797 1.835-.807-8.446-3.782-1.854-.83Z"
          fill="#ED642F"
        ></path>
        ${nameText}
      </svg>
    `;
  }
}
