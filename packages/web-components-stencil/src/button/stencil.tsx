/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */

import { Component, h } from '@stencil/core';

@Component({
  shadow: true,
  styleUrl: 'index.scss',
  tag: 'example-button',
})
export class Button {
  render() {
    return (
      <button class="example-button" type="button">
        <span class="example-button__text">
          <slot></slot>
        </span>
      </button>
    );
  }
}
