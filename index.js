
const TelegramBot = require('node-telegram-bot-api');
const token = '6618504379:AAHqy1vs1KHmebvy19uRw0k-C83qdHYQ-40'; // Replace with your bot token

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const messageId = msg.message_id;

    // Send the first message with a delay
    setTimeout(() => {
        bot.sendMessage(chatId, 'Hello! This is the start of our conversation.').then((sentMessage) => {
            // Delete the "start" message
            bot.deleteMessage(chatId, messageId);

            setTimeout(() => {
                bot.deleteMessage(chatId, sentMessage.message_id);
            }, 100); // Delay of 1 second
        });
    }, 100); // Delay of 1 second

    // Send the 'starting..' message with a delay
    setTimeout(() => {
        bot.sendMessage(chatId, 'starting..').then((secondSentMessage) => {
            setTimeout(() => {
                bot.deleteMessage(chatId, secondSentMessage.message_id);
            }, 500); // Delay of 3 seconds
        });
    }, 1500); // Delay of 2 seconds

    // Send the '⚡' message with a delay
    setTimeout(() => {
        bot.sendMessage(chatId, '⚡').then((thirdSentMessage) => {
            setTimeout(() => {
                bot.deleteMessage(chatId, thirdSentMessage.message_id);
            }, 400); // Delay of 2 seconds
        });
    }, 400); // Delay of 4 seconds

    // Get the username from the message
    const username = msg.from.username;

    // Send a welcome message with an image and the first inline keyboard
    setTimeout(() => {
        bot.sendPhoto(
            chatId,
            'https://images.app.goo.gl/ydMJtQVZo95RPdi56', // Replace with your image URL
            {
                caption: `Hᴇʏ @${username}!,
                ๏ ᴛʜɪs ɪs Itachi Uchiha, !
➻ Itachi Uchiha ɪs ᴀ ɢʀᴏᴜᴘ ᴍᴀɴᴀɢᴇᴍᴇɴᴛ ʙᴏᴛ ᴡʜɪᴄʜ ᴄᴀɴ ʜᴇʟᴩ ʏᴏᴜ ᴛᴏ ᴍᴀɴᴀɢᴇ ᴀɴᴅ sᴇᴄᴜʀᴇ ʏᴏᴜʀ ɢʀᴏᴜᴘ ᴡɪᴛʜ 
──────────────────
๏ ᴄʟɪᴄᴋ ᴏɴ ᴛʜᴇ ʜᴇʟᴩ ʙᴜᴛᴛᴏɴ ᴛᴏ ɢᴇᴛ ɪɴғᴏʀᴍᴀɴᴛɪᴏɴ ᴀʙᴏᴜᴛ ᴍʏ ᴍᴏᴅᴜʟᴇs ᴀɴᴅ ᴄᴏᴍᴍᴀɴᴅs.`,
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: '✨ ADD ME TO YOUR GROUP ✨', url: 'https://telegram.dog/Itachi_x_robot?startgroup=true' }
                        ],
                        [
                            { text: 'Commands', callback_data: 'show_commands' },
                     { text: 'Support', url: 'https://t.me/Deadshot_support' }
                          
                        ]
                    ]
                }
            }
        );
    }, 2500); // Delay of 6 seconds
});

// Handle callback queries

    // Previous code...

bot.on('callback_query', (callbackQuery) => {
    const chatId = callbackQuery.message.chat.id;
    const data = callbackQuery.data;

    if (data === 'show_commands') {
        // User clicked "Commands" in the first inline keyboard
        const messageId = callbackQuery.message.message_id;
        bot.deleteMessage(chatId, messageId); // Delete the "start" message

        bot.sendMessage(chatId, 'Here are the available commands:', {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Command 1', callback_data: 'command1' },
                        { text: 'Command 2', callback_data: 'command2' }
                    ],
                    [
                        { text: 'Back to Main Menu', callback_data: 'main_menu' }
                    ]
                ]
            }
        });
    } else if (data === 'command1') {
        // User clicked "Command 1" in the second inline keyboard
        bot.sendMessage(chatId, 'You selected Command 1.');
    } else if (data === 'main_menu') {
        // User clicked "Back to Main Menu" in the second inline keyboard
        const messageId = callbackQuery.message.message_id;
        bot.deleteMessage(chatId, messageId); // Delete the "Main Menu" message

        // Get the username from the message
        const username = callbackQuery.from.username;

        // Automatically open the "start" message
        bot.sendPhoto(
            chatId,
            'https://images.app.goo.gl/ydMJtQVZo95RPdi56', // Replace with your image URL
            {
                caption: `Hᴇʏ @${username}!,
                ๏ ᴛʜɪs ɪs Itachi Uchiha, !
➻ Itachi Uchiha ɪs ᴀ ɢʀᴏᴜᴘ ᴍᴀɴᴀɢᴇᴍᴇɴᴛ ʙᴏᴛ ᴡʜɪᴄʜ ᴄᴀɴ ʜᴇʟᴩ ʏᴏᴜ ᴛᴏ ᴍᴀɴᴀɢᴇ ᴀɴᴅ sᴇᴄᴜʀᴇ ʏᴏᴜʀ ɢʀᴏᴜᴘ ᴡɪᴛʜ 
──────────────────
๏ ᴄʟɪᴄᴋ ᴏɴ ᴛʜᴇ ʜᴇʟᴩ ʙᴜᴛᴛᴏɴ ᴛᴏ ɢᴇᴛ ɪɴғᴏʀᴍᴀɴᴛɪᴏɴ ᴀʙᴏᴜᴛ ᴍʏ ᴍᴏᴅᴜʟᴇs ᴀɴᴅ ᴄᴏᴍᴍᴀɴᴅs.`,
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: '✨ ADD ME TO YOUR GROUP ✨', url: 'https://telegram.dog/Itachi_x_robot?startgroup=true' }
                        ],
                        [
                            { text: 'Commands', callback_data: 'show_commands' },
                            { text: 'Support', url: 'https://t.me/Deadshot_support' }
                        ]
                    ]
                }
            }
        );
    }
}); // <-- Missing this closing brace

// The rest of your code...

                  
                      
  
bot.onText(/\/id/, (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;

    bot.sendMessage(chatId, `Your User ID: ${userId}\nChat ID: ${chatId}`);
});
// Define a function to check if a user is an admin or owner
function isUserAdminOrOwner(chatId, userId) {
    return bot.getChatMember(chatId, userId)
        .then((chatMember) => {
            return chatMember.status === 'administrator' || chatMember.status === 'creator';
        })
        .catch((error) => {
            return false; // Error occurred, consider as not admin/owner
        });
}

bot.onText(/\/pin/, (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;

    isUserAdminOrOwner(chatId, userId)
        .then((isAdminOrOwner) => {
            if (isAdminOrOwner) {
                if (msg.reply_to_message) {
                    bot.pinChatMessage(chatId, msg.reply_to_message.message_id)
                        .then(() => {
                            bot.sendMessage(chatId, 'Message has been pinned.');
                        })
                        .catch((error) => {
                            bot.sendMessage(chatId, 'Failed to pin the message.');
                        });
                } else {
                    bot.sendMessage(chatId, 'Reply to a message to pin it.');
                }
            } else {
                bot.sendMessage(chatId, 'You must be an admin or owner to use this command.');
            }
        });
});
// Define the bot owner's user ID and an array of sudo users' IDs
const botOwner = 6324330202;


bot.onText(/\/broadcast (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;

    if (userId === botOwner || sudoUsers.includes(userId)) {
        const message = match[1];

        // Send the broadcast message to all users
        bot.getChatAdministrators(chatId).then((admins) => {
            admins.forEach((admin) => {
                const adminId = admin.user.id;
                if (adminId !== userId) {
                    bot.sendMessage(adminId, message);
                }
            });
            bot.sendMessage(chatId, 'Broadcast message sent to all users.');
        });
    } else {
        bot.sendMessage(chatId, 'You are not authorized to use this command.');
    }
});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;

    // Handle other commands and messages here
});
// Define the bot owner's user ID
const botOwnerUserId = '6013899070';

// Define an array of user IDs with sudo privileges
const sudoUserIds = ['6324330202', '6013899070'];

  // Listen for the /startforward command
bot.onText(/\/startforward/, (msg) => {
  const chatId = msg.chat.id;

  // Check if the message sender is the bot owner or has sudo privileges
  const senderUserId = msg.from.id;
  if (senderUserId === botOwnerUserId || sudoUserIds.includes(senderUserId)) {
    // Replace with the chat IDs of your target groups or channels
    const targetChatIds = ['-1001920787479', '-1001986166212'];

    // Forward the message to each target chat
    targetChatIds.forEach((targetChatId) => {
      bot.forwardMessage(targetChatId, chatId, msg.message_id);
    });
  }
});
                bot.onText(/\/adminlist/, (msg) => {
    const chatId = msg.chat.id;

    // Get information about the group
    bot.getChatAdministrators(chatId)
        .then((admins) => {
            let adminList = "List of Administrators:\n";
            admins.forEach((admin) => {
                adminList += `@${admin.user.username}\n`;
            });
            bot.sendMessage(chatId, adminList);
        })
        .catch((error) => {
            console.error(error);
            bot.sendMessage(chatId, "Error fetching the admin list.");
        });
});

// Store the group rules in memory
const groupRules = {};

bot.onText(/\/rules/, (msg) => {
    const chatId = msg.chat.id;
    const rules = groupRules[chatId];

    if (rules) {
        bot.sendMessage(chatId, `Group Rules:\n${rules}`);
    } else {
        bot.sendMessage(chatId, 'No rules have been set for this group.');
    }
});


bot.onText(/\/setrules (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const rulesText = match[1];

    // Store the rules in memory
    groupRules[chatId] = rulesText;
    bot.sendMessage(chatId, 'Group rules have been set.');
});

bot.onText(/\/clearrules/, (msg) => {
    const chatId = msg.chat.id;

    if (groupRules[chatId]) {
        delete groupRules[chatId];
        bot.sendMessage(chatId, 'Group rules have been cleared.');
    } else {
        bot.sendMessage(chatId, 'No rules were set to clear.');
    }
});      
bot.onText(/\/unpin/, (msg) => {
    const chatId = msg.chat.id;

    // Check if the user is an admin or the owner of the group
    bot.getChatAdministrators(chatId)
        .then((admins) => {
            const userId = msg.from.id;
            const isAdminOrOwner = admins.some(admin => admin.user.id === userId || admin.status === 'creator');
            if (isAdminOrOwner) {
                bot.unpinChatMessage(chatId)
                    .then(() => {
                        bot.sendMessage(chatId, 'The pinned message has been unpinned.');
                    })
                    .catch((error) => {
                        console.error(error);
                        bot.sendMessage(chatId, 'An error occurred while trying to unpin the message.');
                    });
            } else {
                bot.sendMessage(chatId, 'You are not authorized to unpin the message.');
            }
        })
        .catch((error) => {
            console.error(error);
            bot.sendMessage(chatId, 'An error occurred while checking admin status.');
        });
});
// Create a set to store locked types for each group
const lockedTypes = new Map();

// Check if the user is an admin or owner
function isAdminOrOwner(msg) {
    const userId = msg.from.id;
    const chatId = msg.chat.id;
    return bot.getChatAdministrators(chatId)
        .then((admins) => {
            return admins.some(admin => admin.user.id === userId || admin.status === 'creator');
        });
}

bot.onText(/\/lock (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;
    const lockType = match[1];

    isAdminOrOwner(msg)
        .then((isAdmin) => {
            if (isAdmin) {
                if (!lockedTypes.has(chatId)) {
                    lockedTypes.set(chatId, new Set());
                }
                lockedTypes.get(chatId).add(lockType);
                bot.sendMessage(chatId, `Locked: ${lockType}`);
            } else {
                bot.sendMessage(chatId, 'You are not authorized to lock actions.');
            }
        });
});


bot.onText(/\/unlock (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;
    const unlockType = match[1];

    isAdminOrOwner(msg)
        .then((isAdmin) => {
            if (isAdmin) {
                if (lockedTypes.has(chatId)) {
                    lockedTypes.get(chatId).delete(unlockType);
                    bot.sendMessage(chatId, `Unlocked: ${unlockType}`);
                } else {
                    bot.sendMessage(chatId, 'No locks are set in this chat.');
                }
            } else {
                bot.sendMessage(chatId, 'You are not authorized to unlock actions.');
            }
        });
});
  
bot.onText(/\/locks/, (msg) => {
    const chatId = msg.chat.id;

    if (lockedTypes.has(chatId)) {
        const locks = Array.from(lockedTypes.get(chatId));
        bot.sendMessage(chatId, `Current Locks: ${locks.join(', ')}`);
    } else {
        bot.sendMessage(chatId, 'No locks are set in this chat.');
    }
});
      
bot.onText(/\/fullpromote/, (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;

    // Check if the user is an admin
    bot.getChatAdministrators(chatId)
        .then((admins) => {
            const isAdmin = admins.some(admin => admin.user.id === userId);
            if (isAdmin) {
                bot.promoteChatMember(chatId, userId, { can_change_info: true, can_post_messages: true, can_edit_messages: true, can_delete_messages: true, can_invite_users: true, can_restrict_members: true, can_pin_messages: true, can_promote_members: true })
                    .then(() => {
                        bot.sendMessage(chatId, 'User has been fully promoted to admin with all privileges.');
                    })
                    .catch((error) => {
                        console.error(error);
                        bot.sendMessage(chatId, 'An error occurred while promoting the user.');
                    });
            } else {
                bot.sendMessage(chatId, 'You are not authorized to fully promote users. Only group admins can use this command.');
            }
        })
        .catch((error) => {
            console.error(error);
            bot.sendMessage(chatId, 'An error occurred while checking admin status.');
        });
});
bot.onText(/\/kickme/, (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;

    bot.kickChatMember(chatId, userId)
        .then(() => {
            bot.sendMessage(chatId, 'You have been kicked from the group.');
        })
        .catch((error) => {
            console.error(error);
            bot.sendMessage(chatId, 'An error occurred while trying to kick you from the group.');
        });
});

