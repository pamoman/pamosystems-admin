import type { Schema, Struct } from '@strapi/strapi';

export interface ContentHeading extends Struct.ComponentSchema {
  collectionName: 'components_content_headings';
  info: {
    displayName: 'Heading';
  };
  attributes: {
    component: Schema.Attribute.Enumeration<
      ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
    > &
      Schema.Attribute.DefaultTo<'h1'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    variant: Schema.Attribute.Enumeration<
      [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'subtitle1',
        'subtitle2',
        'body1',
        'body2',
        'BUTTON',
        'caption',
        'OVERLINE',
      ]
    > &
      Schema.Attribute.DefaultTo<'h2'>;
  };
}

export interface ContentImage extends Struct.ComponentSchema {
  collectionName: 'components_content_images';
  info: {
    displayName: 'Image';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
  };
}

export interface ContentSlideshow extends Struct.ComponentSchema {
  collectionName: 'components_content_slideshows';
  info: {
    description: '';
    displayName: 'Slideshow';
  };
  attributes: {
    images: Schema.Attribute.Media<'images' | 'files', true> &
      Schema.Attribute.Required;
  };
}

export interface ContentVideo extends Struct.ComponentSchema {
  collectionName: 'components_content_videos';
  info: {
    displayName: 'Video';
  };
  attributes: {
    video: Schema.Attribute.Media<'files' | 'videos'> &
      Schema.Attribute.Required;
  };
}

export interface ContentWysiwyg extends Struct.ComponentSchema {
  collectionName: 'components_content_wysiwygs';
  info: {
    description: '';
    displayName: 'WYSIWYG';
  };
  attributes: {
    content: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface GlobalFooter extends Struct.ComponentSchema {
  collectionName: 'components_global_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {
    copyright: Schema.Attribute.String;
  };
}

export interface PageHeading extends Struct.ComponentSchema {
  collectionName: 'components_page_headings';
  info: {
    displayName: 'Heading';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    variant: Schema.Attribute.Enumeration<
      [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'subtitle1',
        'subtitle2',
        'body1',
        'body2',
        'BUTTON',
        'caption',
        'OVERLINE',
      ]
    > &
      Schema.Attribute.DefaultTo<'h1'>;
  };
}

export interface PageHero extends Struct.ComponentSchema {
  collectionName: 'components_page_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    heading: Schema.Attribute.Component<'page.heading', false> &
      Schema.Attribute.Required;
    links: Schema.Attribute.Component<'shared.link', true>;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos', true> &
      Schema.Attribute.Required;
  };
}

export interface PageIcon extends Struct.ComponentSchema {
  collectionName: 'components_page_icons';
  info: {
    description: '';
    displayName: 'Icon';
  };
  attributes: {
    icon: Schema.Attribute.Relation<'oneToOne', 'api::icon.icon'>;
  };
}

export interface SharedEmployee extends Struct.ComponentSchema {
  collectionName: 'components_shared_employees';
  info: {
    displayName: 'employee';
  };
  attributes: {
    user: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::users-permissions.user'
    >;
  };
}

export interface SharedFontAwesome extends Struct.ComponentSchema {
  collectionName: 'components_shared_font_awesomes';
  info: {
    displayName: 'Font Awesome';
  };
  attributes: {
    name: Schema.Attribute.Enumeration<['house', 'address-card']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'house'>;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    icon: Schema.Attribute.Enumeration<['house', 'address-card']> &
      Schema.Attribute.DefaultTo<'house'>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    location: Schema.Attribute.Enumeration<['internal', 'external']>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'/'>;
  };
}

export interface SharedMui extends Struct.ComponentSchema {
  collectionName: 'components_shared_muis';
  info: {
    displayName: 'MUI';
  };
  attributes: {
    name: Schema.Attribute.Enumeration<['house', 'address-card']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'house'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content.heading': ContentHeading;
      'content.image': ContentImage;
      'content.slideshow': ContentSlideshow;
      'content.video': ContentVideo;
      'content.wysiwyg': ContentWysiwyg;
      'global.footer': GlobalFooter;
      'page.heading': PageHeading;
      'page.hero': PageHero;
      'page.icon': PageIcon;
      'shared.employee': SharedEmployee;
      'shared.font-awesome': SharedFontAwesome;
      'shared.link': SharedLink;
      'shared.mui': SharedMui;
    }
  }
}
