import React, { useState, useRef, useEffect } from 'react';
import { Text, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { format, subDays, isToday } from 'date-fns';

const ITEM_WIDTH = 74;
const INITIAL_PAST_DAYS = 10;
const screenWidth = Dimensions.get('window').width;

interface DateItem {
    id: string;
    date: Date;
}

const HorizontalDatePicker: React.FC = () => {
    const today = new Date();
    const [selectedDate, setSelectedDate] = useState<Date>(today);
    const flatListRef = useRef<FlatList<DateItem>>(null);

    const [dates, setDates] = useState<DateItem[]>(() => {
        // Generate dates from today backwards
        return Array.from({ length: INITIAL_PAST_DAYS + 1 }, (_, i) => ({
            id: subDays(today, i).toISOString(),
            date: subDays(today, i),
        }));
    });

    // Scroll ke today saat pertama render
    useEffect(() => {
        if (flatListRef.current) {
            flatListRef.current.scrollToIndex({
                index: 0,
                animated: false,
                viewPosition: 0, // 1 means right edge
            });
        }
    }, []);

    const loadMorePast = () => {
        const oldestDate = dates[dates.length - 1].date;
        const newPastDates = Array.from({ length: 3 }, (_, i) => ({
            id: subDays(oldestDate, i + 1).toISOString(),
            date: subDays(oldestDate, i + 1),
        }));
        setDates([...dates, ...newPastDates]);
    };

    return (
        <FlatList<DateItem>
            ref={flatListRef}
            data={dates}
            horizontal
            inverted
            showsHorizontalScrollIndicator={false}
            disableIntervalMomentum={true}
            className="bg-[#F2F6FE] py-4"
            contentContainerStyle={{ paddingHorizontal: 16 }}
            onEndReached={loadMorePast}
            onEndReachedThreshold={0}
            maintainVisibleContentPosition={{
                minIndexForVisible: 0,
            }}
            scrollEventThrottle={16}
            decelerationRate="normal"
            getItemLayout={(_, index) => ({
                length: ITEM_WIDTH,
                offset: ITEM_WIDTH * index,
                index,
            })}
            initialScrollIndex={0}
            renderItem={({ item }) => {
                const isActive = item.date.toDateString() === selectedDate.toDateString();
                return (
                    <TouchableOpacity
                        onPress={() => setSelectedDate(item.date)}
                        className={`mr-3 h-20 w-20 items-center justify-center rounded-xl ${
                            isActive ? 'bg-primary' : 'bg-white'
                        }`}
                    >
                        <Text
                            className={`text-lg font-bold ${
                                isActive ? 'text-white' : 'text-primary'
                            }`}
                        >
                            {format(item.date, 'd')}
                        </Text>

                        <Text className={`text-sm ${isActive ? 'text-white' : 'text-primary'}`}>
                            {format(item.date, 'MMMM')}
                        </Text>

                        <Text className={`text-sm ${isActive ? 'text-white' : 'text-primary'}`}>
                            {format(item.date, 'yyyy')}
                        </Text>


                        {/*{isToday(item.date) && (*/}
                        {/*    <Text*/}
                        {/*        className={`text-xs ${isActive ? 'text-white' : 'text-blue-500'}`}*/}
                        {/*    >*/}
                        {/*        Today*/}
                        {/*    </Text>*/}
                        {/*)}*/}
                    </TouchableOpacity>
                );
            }}
        />
    );
};

// @ts-ignore
export default HorizontalDatePicker;
