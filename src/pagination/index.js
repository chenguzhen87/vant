import { createNamespace } from '../utils';
import { BORDER } from '../utils/constant';
import { computed, watch } from 'vue';

const [createComponent, bem, t] = createNamespace('pagination');

function makePage(number, text, active) {
  return { number, text, active };
}

export default createComponent({
  props: {
    prevText: String,
    nextText: String,
    forceEllipses: Boolean,
    mode: {
      type: String,
      default: 'multi',
    },
    modelValue: {
      type: Number,
      default: 0,
    },
    pageCount: {
      type: [Number, String],
      default: 0,
    },
    totalItems: {
      type: [Number, String],
      default: 0,
    },
    itemsPerPage: {
      type: [Number, String],
      default: 10,
    },
    showPageSize: {
      type: [Number, String],
      default: 5,
    },
  },

  emits: ['change', 'update:modelValue'],

  setup(props, { emit, slots }) {
    const count = computed(() => {
      const { pageCount, totalItems, itemsPerPage } = props;
      const count = pageCount || Math.ceil(totalItems / itemsPerPage);
      return Math.max(1, count);
    });

    const pages = computed(() => {
      const pages = [];
      const pageCount = count.value;
      const showPageSize = +props.showPageSize;
      const { modelValue, forceEllipses } = props;

      if (props.mode !== 'multi') {
        return pages;
      }

      // Default page limits
      let startPage = 1;
      let endPage = pageCount;
      const isMaxSized = showPageSize < pageCount;

      // recompute if showPageSize
      if (isMaxSized) {
        // Current page is displayed in the middle of the visible ones
        startPage = Math.max(modelValue - Math.floor(showPageSize / 2), 1);
        endPage = startPage + showPageSize - 1;

        // Adjust if limit is exceeded
        if (endPage > pageCount) {
          endPage = pageCount;
          startPage = endPage - showPageSize + 1;
        }
      }

      // Add page number links
      for (let number = startPage; number <= endPage; number++) {
        const page = makePage(number, number, number === modelValue);
        pages.push(page);
      }

      // Add links to move between page sets
      if (isMaxSized && showPageSize > 0 && forceEllipses) {
        if (startPage > 1) {
          const prevPages = makePage(startPage - 1, '...');
          pages.unshift(prevPages);
        }

        if (endPage < pageCount) {
          const nextPages = makePage(endPage + 1, '...');
          pages.push(nextPages);
        }
      }

      return pages;
    });

    const select = (page, emitChange) => {
      page = Math.min(count.value, Math.max(1, page));

      if (props.modelValue !== page) {
        emit('update:modelValue', page);

        if (emitChange) {
          emit('change', page);
        }
      }
    };

    watch(() => props.modelValue, select, { immediate: true });

    const renderDesc = () => {
      if (props.mode !== 'multi') {
        return (
          <li class={bem('page-desc')}>
            {slots.pageDesc
              ? slots.pageDesc()
              : `${props.modelValue}/${count.value}`}
          </li>
        );
      }
    };

    return () => {
      const value = props.modelValue;
      const simple = props.mode !== 'multi';

      const onSelect = (value) => () => {
        select(value, true);
      };

      return (
        <ul class={bem({ simple })}>
          <li
            class={[
              bem('item', { disabled: value === 1 }),
              bem('prev'),
              BORDER,
            ]}
            onClick={onSelect(value - 1)}
          >
            {props.prevText || t('prev')}
          </li>
          {pages.value.map((page) => (
            <li
              class={[
                bem('item', { active: page.active }),
                bem('page'),
                BORDER,
              ]}
              onClick={onSelect(page.number)}
            >
              {page.text}
            </li>
          ))}
          {renderDesc()}
          <li
            class={[
              bem('item', { disabled: value === count.value }),
              bem('next'),
              BORDER,
            ]}
            onClick={onSelect(value + 1)}
          >
            {props.nextText || t('next')}
          </li>
        </ul>
      );
    };
  },
});