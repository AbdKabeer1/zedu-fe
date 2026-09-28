import { Extension } from "@tiptap/core";
import { Plugin, PluginKey } from "@tiptap/pm/state";
import { Decoration, DecorationSet } from "@tiptap/pm/view";
import { appleEmojiImageUrl, lookupAppleEmoji } from "~/utils/apple-emoji";

const EMOJI_PATTERN =
  /\p{Extended_Pictographic}[\u{E0020}-\u{E007E}]+\u{E007F}|\p{Regional_Indicator}{2}|[#*0-9]\uFE0F?\u20E3|\p{Extended_Pictographic}(?:\p{Emoji_Modifier}|\uFE0F|\uFE0E)?(?:\u200D\p{Extended_Pictographic}(?:\p{Emoji_Modifier}|\uFE0F|\uFE0E)?)*/gu;

export const AppleEmoji = Extension.create({
  name: "appleEmoji",

  addProseMirrorPlugins() {
    return [
      new Plugin({
        key: new PluginKey("appleEmoji"),
        props: {
          decorations(state) {
            const decorations: Decoration[] = [];

            state.doc.descendants((node, pos) => {
              if (node.type.name === "codeBlock") return false;
              if (!node.isText || !node.text) return;
              if (node.marks.some((mark) => mark.type.name === "code")) return;

              EMOJI_PATTERN.lastIndex = 0;
              let match: RegExpExecArray | null;

              while ((match = EMOJI_PATTERN.exec(node.text))) {
                const unified = lookupAppleEmoji(match[0]);
                if (!unified) continue;

                const from = pos + match.index;
                const to = from + match[0].length;

                decorations.push(
                  Decoration.inline(from, to, {
                    class: "apple-emoji",
                    style: `--apple-emoji-image: url("${appleEmojiImageUrl(unified)}")`,
                  })
                );
              }
            });

            return DecorationSet.create(state.doc, decorations);
          },
        },
      }),
    ];
  },
});
